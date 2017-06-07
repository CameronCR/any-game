import React from 'react';
import { Link } from 'react-router-dom';

function navLink(link, text, currentPath){
  if (link === currentPath) {
    return <li className="nav-item"><Link className="nav-link active" to={link}>{text}</Link></li>;
  } else {
    return <li className="nav-item"><Link className="nav-link" to={link}>{text}</Link></li>;
  }
}

export default navLink