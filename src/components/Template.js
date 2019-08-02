import React from 'react';
import '../App.css';

function Template (props){

  const listName = props.listName === "mylist" ? props.myList : props.recommendationList;
  const btnType  = props.listName === "mylist" ? props.remove : props.add;
  const btnName = props.listName === "mylist" ? "Remove" : "Add";
  
  return(
    <div>
      <ul >
        {listName.map(item =>(
          <li key={item.id}>
            <img 
              src ={item.img} 
              alt = {item.title}
            />
            <div>{item.title}</div>
            <button onClick = {() => btnType(item)}>{btnName}</button>  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Template;
