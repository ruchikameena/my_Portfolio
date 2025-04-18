import React from 'react';
import './Header.css'

const Header = () =>{
    return(
        <header>
            <div className = "logo">
                <p>My Portfolio</p>
            </div>
            <div className="links">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">skills</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><a href="#resume">resume</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#achievements">achievements</a></li>
                </ul>
            </div>
            <div className="theme">
                <button className="theme_toggle"> theme</button>
            </div>
        </header>
    );
}

export default Header;
