import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as teamActions from '../../actions/teams';
import RefereeRouter from '../../routers/RefereeRouter';
import Header from  '../common/Header';

class RefereeConsole extends Component {

  lineItem(link, text){
    if (link === this.props.location.pathname) {
      return <li className="active"><Link to={link}>{text}</Link></li>;
    } else {
      return <li><Link to={link}>{text}</Link></li>;
    }
  }

  render() {
    return (
        <div>
          <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 className="page-header">Settings</h1>
                <div className="col-sm-3 col-md-2 sidebar">
                  <ul className="nav nav-sidebar">
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Analytics</a></li>
                    <li><a href="#">Export</a></li>
                  </ul>
                  <ul className="nav nav-sidebar">
                    {this.lineItem('/referee/teams', 'Team Admin')}
                    {this.lineItem('/referee/sport-admin', 'Sport Admin')}
                    <li><a href="#">One more nav</a></li>
                    <li><a href="#">Another nav item</a></li>
                    <li><a href="#">More navigation</a></li>
                  </ul>
                  <ul className="nav nav-sidebar">
                    <li><a href="#">Nav item again</a></li>
                    <li><a href="#">One more nav</a></li>
                    <li><a href="#">Another nav item</a></li>
                  </ul>
                </div>
                <RefereeRouter/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamActions: bindActionCreators(teamActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RefereeConsole);
