import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const AuthContext = React.createContext();

const SECRET = process.env.REACT_APP_SECRET;

const testUsers = {
  admin: {
    username: 'admin',
    password: 'test',
    role: 'admin',
    capabilities: ['create', 'read', 'update', 'delete'],
  },
  editor: {
    username: 'editor',
    password: 'test',
    role: 'editor',
    capabilities: ['read', 'update'],
  },
  writer: {
    username: 'writer',
    password: 'test',
    role: 'writer',
    capabilities: ['read', 'create'],
  },
};

function Auth ({children}) {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  let state = {
    isLoggedIn,
    user,
    isAuthorized,
    login,
    logout,
    token,
    validateToken,
    setLogInState
  };

  function isAuthorized(capability) {
    // check user capilities and return a boolean
    return user?.capabilities?.includes(capability);
  }

  function login(username, password) {
    let user = testUsers[username];
    if (user && user.password === password) {
      const token = jwt.sign(user, SECRET);
      validateToken(token);
    }
  }

  function logout() {
    if (isLoggedIn) {
      setLogInState(false, null, {});
    }
  }

  function validateToken(token) {
    try{
      let user = jwt.verify(token, SECRET);
      setLogInState(true, token, user);
    } catch (e) {
      setLogInState(false, null, {});
      console.log('Error validating token:', e);
    }
  }

  function setLogInState(boolean, token, user) {
    cookie.save('auth', token);
    setLoggedIn(boolean);
    setToken(token);
    setUser(user);
  }

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    validateToken(token);
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;