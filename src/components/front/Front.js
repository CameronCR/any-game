import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
        <h1>Any Game</h1>
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
