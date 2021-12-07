import { useContext, useState } from 'react';
import { SettingsContext } from '../../context/settings.js';
import { RadioGroup, Radio } from '@blueprintjs/core';

function ViewOptions() {
  const settings = useContext(SettingsContext);
  settings;

  const [radioSelected, setRadioSelected] = useState(false);

  function handleRadioChange(e) {
    settings.setCompleted(e.target.value);
    console.log(settings.showCompleted);
    setRadioSelected(e.currentTarget.value);
  }

  function handleInputChange(e) {
    settings.setNumberOfItems(parseInt(e.target.value));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // put items in storage
    let stringifiedObject = JSON.stringify({ numberOfItems: settings.numberOfItems, showCompleted: settings.showCompleted });
    localStorage.setItem('userPreferences', stringifiedObject);
    alert('view options saved!');
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h2>Change Your View</h2>
        <RadioGroup
          label="Show Completed Tasks?"
          onChange={handleRadioChange}
          selectedValue={radioSelected}
        >
          <Radio label="Yes" value='true' />
          <Radio label="No" value='false' />
        </RadioGroup>
        <label>
          <span>Tasks per page</span>
          <input onChange={handleInputChange} min="0" step="1" name="tasksPerPage" type="number" />
        </label>
        <label>
          <button type="submit">Save</button>
        </label>
      </form>
    </>
  );
}

export default ViewOptions;