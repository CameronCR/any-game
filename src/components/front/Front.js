import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import FrontHeader from './Headers/FrontHeader';
import TeamSelection from './TeamSelection';


class Front extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //this.props.gameActions.loadGames();
  }

  render() {
    return (
      <div>
        <FrontHeader />
        <TeamSelection />
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

  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Front);
