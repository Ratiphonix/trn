import React from 'react';
import './Header.css';


const Header = () => {

    return (

        <div class="Header">
        <h4>TRN 57</h4>
        <div class="dropdown">
        <button onclick="dropDownOpen()" class="profile"></button>
        <div id="myDropdown" class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        </div>
        </div>
        </div>
    );
}

export default Header;