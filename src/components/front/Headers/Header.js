import React from 'react';

function Header(props){
  return(
    <div className="header">
      <div className="w3layouts_header_right">
        <div className="agileits-social top_content">
          <ul>
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-rss"></i></a></li>
            <li><a href="#"><i className="fa fa-vk"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="w3layouts_header_left">
        <ul>
          <li><a href="#" data-toggle="modal" data-target="#myModal2"><i className="fa fa-user" aria-hidden="true"></i> Sign in</a></li>
          <li><a href="#" data-toggle="modal" data-target="#myModal3"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Sign up</a></li>
        </ul>
      </div>
      <div className="clearfix"> </div>
    </div>
  );
}

export default Header;
