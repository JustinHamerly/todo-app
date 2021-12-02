import { useContext } from 'react';
import { SettingsContext } from '../../context/settings.js';

function Form(props){
  let settings = useContext(SettingsContext);

  return(
  <form onSubmit={props.onSubmit}>

    <h2>Add To Do Item</h2>

    <label>
      <span>To Do Item</span>
      <input onChange={props.onChange} name="text" type="text" placeholder="Item Details" />
    </label>

    <label>
      <span>Assigned To</span>
      <input onChange={props.onChange} name="assignee" type="text" placeholder="Assignee Name" />
    </label>

    <label>
      <span>Difficulty</span>
      <input onChange={props.onChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
    </label>

    <label>
      <button type="submit">Add Item</button>
    </label>

  </form>
  );
}

export default Form;