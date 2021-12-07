import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {

  const [numberOfItems, setNumberOfItems] = useState(4);
  const [showCompleted, setCompleted] = useState(false);

  const state = {
    numberOfItems,
    showCompleted,
    setNumberOfItems:(number) => {
      setNumberOfItems(number);
    },
    setCompleted:(boolean) => {
      setCompleted(boolean);
    }
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default Settings;