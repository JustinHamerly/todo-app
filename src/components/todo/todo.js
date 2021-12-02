import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import Header from '../header/Header';
import List from '../list/List';
import Form from '../form/Form';
import { SettingsContext } from '../../context/settings.js';
import { v4 as uuid } from 'uuid';


const ToDo = () => {

  let settings = useContext(SettingsContext)

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete} />
      <Form onSubmit={handleSubmit} onChange={handleChange} />
      <List list={list} setList={setList} />
    </>
  )
};

export default ToDo;
