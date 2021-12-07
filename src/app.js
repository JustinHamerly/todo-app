import React from 'react';
import Login from './components/login/login.js';
import Auth from './components/auth/Auth.js';
import { useEffect, useState, useContext } from 'react';
import useForm from './hooks/form.js';
import { v4 as uuid } from 'uuid';
import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import List from './components/list/List.js';
import ViewOptions from './components/viewOptions/viewOptions.js';
import { SettingsContext } from './context/settings.js';

export default function App() {
  const settings = useContext(SettingsContext);
  settings;
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;

    if (!list.includes(item)) {
      setList([...list, item]);
    } else {
      alert('That to-do item already exsists!');
    }
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);


  useEffect(() => {
    // pull user preferences from storage on page load
    let storage = localStorage.getItem('userPreferences');
    if (storage) {
      let parsedObject = JSON.parse(storage);
      console.log('local storage', parsedObject);
      settings.setNumberOfItems(parsedObject.numberOfItems);
      settings.setCompleted(parsedObject.showCompleted);
    }
  }, []);

  return (
    <>
      <Login />
      <Auth capability="read">
        <Header incomplete={incomplete} />
      </Auth>
      <Auth capability="read">
        <div id="formContainer">
          <ViewOptions />
          <Auth capability="create">
            <Form handleSubmit={handleSubmit} handleChange={handleChange} />
          </Auth>
        </div>
      </Auth>
      <Auth capability="read">
        <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
      </Auth>
    </>
  );
}
