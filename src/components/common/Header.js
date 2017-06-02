import React, { Component} from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"> </span>
              <span className="icon-bar"> </span>
              <span className="icon-bar"> </span>
            </button>
            <Link to="/" className="navbar-brand"> Any Game</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="settings">Settings</Link></li>
              <li><a href="#">Help</a></li>
            </ul>
            <form className="navbar-form navbar-right">
              <input type="text" className="form-control" placeholder="Search..." />
            </form>
          </div>
        </div>
      </nav>
  );
};

export default Header;