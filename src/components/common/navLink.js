import React from 'react';
import { Link, NavLink } from 'react-router-dom';


function navLink(link, text){
    return <li className="nav-item"><NavLink className="nav-link" to={link}>{text}</NavLink></li>;
}

export default navLink;