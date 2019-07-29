import React from "react"
import logo from '../Netflix-Logo.png';
import '../App.css';


function Header(){
    return(
        <div className = "background">
          <img className = "logo" src = {logo} alt = "netflix icon" />
        </div> 
    );
}
export default Header;