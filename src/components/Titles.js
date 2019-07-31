import React from 'react';
import {connect} from 'react-redux';
import '../App.css';

function Titles (props){
  const mylist = props.data.mylist;
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

const mapStateToProps = (state) => { 
  return{
    data: state
  }
};

export default connect(mapStateToProps)(Titles);
