import React, {Component} from 'react';
import { getData } from './redux';
import {removeMovie} from './redux';
import {addMovie} from './redux';
import {connect} from 'react-redux';
import logo from './Netflix-Logo.png';
import './App.css';
export class App extends Component{
  componentDidMount() {
    this.props.fetchData();
  }
  render(){
    console.log(this.props.data)
    const mylist = this.props.data.mylist;
    const recommendations = this.props.data.recommendations;
    console.log(mylist);
    return(
      <div>
        <div className = "background">
          <img className = "logo" src = {logo} alt = "netflix icon" />
        </div>
        <ul >
          {mylist.map((item, index) =>(
            <li key={index}>
              <img 
                src ={item.img} 
                alt = {item.title}
                />
                <div>{item.title}</div>
                <button onClick = {() => this.props.remove(item)}>removeMovie</button>
               
            </li>
          ))}
        </ul>
        <ul>
        {recommendations.map((item, index) =>(
            <li key={index}>
              <img
                src ={item.img} 
                alt = {item.title}
                />
                <div>{item.title}</div>
                <button onClick = {()=> this.props.add(item)}>addMovie</button>
            </li>
          ))}
        </ul>
        <ul >
          {mylist.map((item, index) =>(
            <li key={index}>
                {item.title}
            </li>
        ))}
        </ul>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state) => { 
  console.log('sta', state.getDataReducer)
  return{
    data: state.getDataReducer 
  }
};
//const mapDispatchToProps = { getData };
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

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
