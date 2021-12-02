import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {

  let [state, setState] = useState({
    displayCompleted: false,
    numberOfItems: 5,
    defaultSortField: 'name',
  });

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default Settings;
