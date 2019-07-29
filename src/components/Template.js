import React from 'react';
import {getData } from '../Redux/actions';
import {removeMovie} from '../Redux/actions';
import {addMovie} from '../Redux/actions';
import {connect} from 'react-redux';
import '../App.css';

class Template extends React.Component{
  componentDidMount() {
    this.props.fetchData();
  }
  render(){
    console.log(this.props.data)
    const mylist = this.props.data.mylist;
    const recommendations = this.props.data.recommendations;
    const listName = this.props.listName === "mylist" ? mylist : recommendations;
    const btnType  = this.props.listName === "mylist" ? this.props.remove : this.props.add;
    const btnName = this.props.listName === "mylist" ? "removeMovie" : "addMovie";
    console.log(mylist);
    return(
      <div>
        <ul >
          {listName.map((item, index) =>(
            <li key={index}>
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
}


const mapStateToProps = (state) => { 
  console.log('sta', state)
  return{
    data: state
  }
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(getData());
  },
  remove : (movie) =>{
    dispatch(removeMovie(movie));
  }, 
  add: (movie) => {
    dispatch(addMovie(movie));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Template);
