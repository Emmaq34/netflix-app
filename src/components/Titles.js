import React from 'react';
import {connect} from 'react-redux';
import '../App.css';

class Titles extends React.Component{
  /*
  componentDidMount() {
    this.props.fetchData();
  }
  */
  render(){
    console.log(this.props.data)
    const mylist = this.props.data.mylist;
    console.log(mylist);
    return(
      <div>
        <ul>
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


const mapStateToProps = (state) => { 
  console.log('sta', state)
  return{
    data: state
  }
};

/*
const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(getData());
  },
});
*/
export default connect(mapStateToProps)(Titles);
