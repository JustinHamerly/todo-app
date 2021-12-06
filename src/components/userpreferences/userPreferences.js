import React, { useContext } from 'react';
import { SettingsContext } from '../../context/settings';

function UserSettings() {
  let settings = useContext(SettingsContext);
  return (
    <div className="flex flex-col m-4 p-2 border-purple-500 border-2 rounded-md w-36">
      <label htmlFor="item count">Item Count</label>
      <input id="item count" type="number" name="item count" min="3"
        value={settings.numberOfItems}
        max="8"
        className="w-12 border-gray-800 border-2 rounded-md m-2"
        onChange={(e) => settings.setNumberOfItems(e.target.value)}
      />

      <label htmlFor="display completed">Display Completed</label>
      <input type="checkbox" id="display completed" name="display completed" checked={settings.displayCompleted} onClick={() => {
        settings.setDisplayCompleted();
      }}
      />
    </div>
  );
}

export default UserSettings;