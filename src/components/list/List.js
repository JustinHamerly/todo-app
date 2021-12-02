import { useContext, useState } from 'react';
import { SettingsContext } from '../../context/settings.js';
import { Button, Card, Elevation } from '@blueprintjs/core';

function List(props) {
  let settings = useContext(SettingsContext);
  let [page, setPage] = useState(1);

  function toggleComplete(id) {

    const items = props.list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    props.setList(items);

  }

  function changePage(e) {
    if (e.target.id === 'next'){
      setPage(page + 1);
      return;
    } else if (e.target.id === 'prev'){
      setPage(page - 1);
      return
    }
    return;
  }

  const lastIndex = page * settings.numberOfItems;

  const firstIndex = lastIndex - settings.numberOfItems;

  const pageListItems = props.list.slice(firstIndex, lastIndex);

  return (
    <>
      <div>
        {pageListItems.map(item => (
          <Card id='todoCard' interactive={true} elevation={Elevation.TWO} key={item.id}>
            <h5>{item.text}</h5>
            <p><small>Assigned to: {item.assignee}</small></p>
            <p><small>Difficulty: {item.difficulty}</small></p>
            <Button onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}
            </Button>
          </Card>
        ))}
      </div>
      <div>
        {page > 1 && (
          <Button id="prev" onClick={changePage} type="button" className="rounded-md bg-green-300 w-12">
            PREV
          </Button>
        )}
        {props.list.length > settings.numberOfItems ? (
          <Button id="next" onClick={changePage} type="button" className="rounded-md bg-green-300 w-12">
            NEXT
          </Button>
        ) : null}
      </div>
    </>
    
  )

}

export default List;