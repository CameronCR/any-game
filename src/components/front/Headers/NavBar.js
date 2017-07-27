import React from 'react';

function NavBar(props){
  return(
    <div style={props.style} className="banner">
        <nav className="navbar navbar-default">
            <div className="navbar-header navbar-left">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <h1><a className="navbar-brand" href="index.html">Any<span>G</span>ame</a></h1>
            </div>
            <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
              <nav className="link-effect-2" id="link-effect-2">
                  <ul className="nav navbar-nav">
                      <li className="active"><a href="index.html"><span data-hover="Home">Home</span></a></li>
                      <li><a href="about.html"><span data-hover="About Us">About Us</span></a></li>
                      <li><a href="events.html"><span data-hover="Events">Teams</span></a></li>
                      <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span data-hover="Short Codes">Sell Tickets</span> <b className="caret"></b></a>
                          <ul className="dropdown-menu agile_short_dropdown">
                              <li><a href="icons.html">Web Icons</a></li>
                              <li><a href="typography.html">Typography</a></li>
                          </ul>
                      </li>
                      <li><a href="mail.html"><span data-hover="Mail Us">Contact Us</span></a></li>
                  </ul>
              </nav>
            </div>
            <div className="w3_agile_search">
                <form action="#" method="post">
                    <input type="search" name="Search" placeholder="Search Team or City..." required="" />
                    <input type="submit" value="Search" />
                </form>

            </div>
        </nav>
      </div>
  );
}

export default NavBar;
