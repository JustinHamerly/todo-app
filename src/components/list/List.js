import { useContext, useState } from 'react';
import { SettingsContext } from '../../context/settings.js';
import ListItem from '../listItem/listItem.js';

function List(props) {

  const settings = useContext(SettingsContext);
  const [currentPage, setPage] = useState(1);

  function changePage(e) {
    if (e.target.id === 'next') {
      setPage(currentPage + 1);
      return;
    } else if (e.target.id === 'prev') {
      setPage(currentPage - 1);
      return;
    }
    return;
  }

  const lastIndex = currentPage * settings.numberOfItems;
  const firstIndex = lastIndex - settings.numberOfItems;
  const listItems = props.list.slice(firstIndex, lastIndex);

  return (
    <>
      <div id='cardContainer'>
        {listItems.map(item => (
          <ListItem key = {item.id} item={item} toggleComplete={props.toggleComplete} deleteItem={props.deleteItem} />
        ))}
      </div>
      <div id="nextPrevButtons">
        {currentPage > 1 ? (
          <button id="prev" onClick={changePage} type="button">
            Back
          </button>
        ) : null}
        {props.list.length > settings.numberOfItems ? (
          <button id="next" onClick={changePage} type="button">
            Next
          </button>
        ) : null}
      </div>
    </>
  );
}

export default List;