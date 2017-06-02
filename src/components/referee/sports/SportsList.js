import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as sportActions from '../../../actions/sports';

import SportPreview from './SportsListPreview';

class SportsList extends Component {

  componentWillMount(){
    this.props.sportActions.loadSports();
  }

  sportListing(sport, index){
    return <SportPreview sport={sport} key={index} />;
  }

  render() {
    return (
        <div>
          <h2>Sports</h2>
          <div className="list-group">
            {this.props.sports.map(this.sportListing)}
          </div>
        </div>
    );
  }
}

SportList.propTypes = {
  sports: PropTypes.array,
  sportActions: PropTypes.object
};

SportList.defaultProps = {
  sports: []
};

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

