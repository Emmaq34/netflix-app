import React from 'react';
import {getData } from './Redux/actions';
import {removeMovie} from './Redux/actions';
import {addMovie} from './Redux/actions'
import {connect} from 'react-redux';
import Header from './components/Header';
import Template from './components/Template';
import Titles from './components/Titles';
import './App.css';

//This component is for redering the whole web page and fetch data here to avoid fetch multiple times
class App extends React.Component{

  componentDidMount() {
    this.props.fetchData();
  }

  render(){
    const mylist = this.props.data.mylist;
    const recommendations = this.props.data.recommendations;

    return(
      <div>
        <Header/>
        <Template listName = "mylist"  myList = {mylist} remove = {this.props.remove}/>
        <Template listName = "recommendations" recommendationList = {recommendations} add = {this.props.add}/>
        <Titles myList = {mylist}/>
      </div>
    );
  } 
}

const mapStateToProps = (state) => ({data: state});

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

export default connect(mapStateToProps, mapDispatchToProps)(App);

