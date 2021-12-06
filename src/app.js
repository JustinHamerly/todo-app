import ToDo from './components/todo/todo';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import List from './components/list/List';
import Settings from './context/settings';
import UserPreferences from './components/userpreferences/userPreferences';

function App () {
  const [incomplete, setIncomplete] = useState();
  const [list, setList] = useState([]);

  useEffect(() => {
    let incompleteItems = list.filter(item => !item.complete);
    let incompleteNumber = incompleteItems.count;
    setIncomplete(incompleteNumber);
    document.title = `TO-DO List: ${incompleteNumber} items incomplete`;
  }, [list]);

  return (
    <Settings>
      <Header incomplete={incomplete} />
      <UserPreferences />
      <ToDo setIncomplete={setIncomplete} setList={setList} list={list} />
      <List list={list} setList={setList} />
    </Settings>
  )
}

export default App;