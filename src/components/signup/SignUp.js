import React, { useContext, useState } from 'react';
import {When} from 'react-if';

import { AuthContext } from '../../context/auth.js';

function SignUp() {
  let auth = useContext(AuthContext);

  let [user, setUser] = useState({ username: '', password: '' });

  handleChange = e => {
    setUser({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    auth.login(user.username, user.password);
  };

    return (
      <>
        <When condition={auth.isLoggedIn}>
          <button onClick={auth.logout}>Log Out</button>
        </When>

        <When condition={!auth.isLoggedIn}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="username"
              name="username"
              onChange={handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <button>Login</button>
          </form>
        </When>
      </>
    );
}

export default SignUp;