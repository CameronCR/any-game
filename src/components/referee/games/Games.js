import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gameActions from '../../../actions/games';

class Games extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Games Admin</h1>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(gameActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Games);
