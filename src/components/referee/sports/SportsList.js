import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sportActions from '../../../actions/sports';

import SportsListPreview from './SportsListPreview';

class SportsList extends Component {

  componentWillMount(){
    this.props.sportActions.loadSports();
  }

  sportListing(sport, index){
    return <SportsListPreview sport={sport} key={index} />;
  }

  render() {
    return (
        <div className="col-md-4">
          <div className="list-group">
            {this.props.sports.map(this.sportListing)}
          </div>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    sports: state.sports
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sportActions: bindActionCreators(sportActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SportsList);