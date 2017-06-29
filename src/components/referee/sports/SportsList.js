import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sportActions from '../../../actions/sports';

import SportsListPreview from './SportsListPreview';

class SportsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sport: ''
    };

    this.clickSport = this.clickSport.bind(this);
    this.sportListing = this.sportListing.bind(this);
  }

  componentWillMount(){
    this.props.sportActions.loadSports();
  }

  clickSport(sport) {
    this.props.setSport(sport);
  }

  sportListing(sport, index){
    return <SportsListPreview sport={sport} key={index} handleClick={this.clickSport} />;
  }

  render() {
    return (
      <div className="col-md-4">
        <ul className="list-group">
          {this.props.sports.map(this.sportListing)}
        </ul>
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
