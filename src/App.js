import React from 'react';
import Header from './components/Header';
import Template from './components/Template';
import Titles from './components/Titles';
import './App.css';

function App (){
  return(
    <div>
      <Header/>
      <Template listName = "mylist" />
      <Template listName = "recommendations" />
      <Titles />
    </div>
   );
}

export default App;
