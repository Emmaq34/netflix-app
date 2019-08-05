import React from 'react';
import '../App.css';

//This component is for rendering the list of titles in the “My List” row, display at the bottom of the page
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
