import React from "react"
import logo from '../Netflix-Logo.png';
import '../App.css';

//This component is for rendering the Netflix logo at the top
function Header(){
    return(
        <div className = "background">
          <img className = "logo" src = {logo} alt = "netflix icon" />
        </div> 
    );
}
export default Header;