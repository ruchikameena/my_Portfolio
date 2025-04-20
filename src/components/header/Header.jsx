import React from 'react';
import {Link} from "react-router-dom" ;
import './Header.css';

const Header = () =>{
    return(
        <header>
            <div className = "logo">
                <p>My Portfolio</p>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/skills">skills</Link></li>
                    <li><Link to="/projects">projects</Link></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/achievements">achievements</Link></li>
                </ul>
            </div>
            <div className="theme">
                <button className="theme_toggle"> theme</button>
            </div>
        </header>
    );
}

export default Header;
