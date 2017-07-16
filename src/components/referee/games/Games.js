import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gameActions from '../../../actions/games';
import * as settingsActions from '../../../actions/settings';


class Games extends Component {
  constructor(props) {
    super(props);
    //this.props.settingsActions.loadSettings();
  }

  componentDidMount() {
    this.props.gameActions.loadGamesFromServer('new-york-mets', this.props.settings.seatGeek.clientId, this.props.settings.seatGeek.secret);
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
    games: state.games,
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(gameActions, dispatch),
    settingsActions: bindActionCreators(settingsActions, dispatch)

  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Games);
