import React, { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {

  let [numberOfItems, setNumberOfItems] = useState(5);
  let [displayCompleted, setDisplayCompleted] = useState(true);

  useEffect(() => {
    let storedPref = JSON.parse(window.localStorage.getItem('settings'))  || {};

    if (Object.keys(storedPref).length === 0){
      console.log('nothing saved');
    }else{
      console.log(storedPref);
      setNumberOfItems(storedPref.numberOfItems);
      setDisplayCompleted(storedPref.displayCompleted);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      'settings',
      JSON.stringify({ numberOfItems, displayCompleted})
    );
  }, [numberOfItems, displayCompleted])

  let data = {
    displayCompleted, setDisplayCompleted: function (){
      setDisplayCompleted(!displayCompleted);
    },
    numberOfItems, setNumberOfItems: function (number){
      setNumberOfItems(number);
    }
  }

  return (
    <SettingsContext.Provider value={data}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default Settings;
