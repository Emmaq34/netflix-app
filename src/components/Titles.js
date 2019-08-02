import React from 'react';
import '../App.css';

function Titles (props){
  const mylist = props.myList;
  return(
    <div>
      <ul>
        {mylist.map(item =>(
          <li key={item.id}>
              {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Titles;
