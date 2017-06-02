import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import SportForm from './SportForm';

import * as sportActions from '../../../actions/sports';

class AddSport extends Component {

  constructor(props, context) {
    let date = new Date().toISOString();
    super(props, context);
    this.state = {
      sport: Object.assign({}, props.sport),
      defaultDate: date
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.updateFormState = this.updateFormState.bind(this);
  }

  updateFormState(event) {
    const field = event.target.name;
    let sport = this.state.sport;
    sport[field] = event.target.value;
    return this.setState({sport: sport});
  }


  onClickSave(event){
    this.props.sportActions.saveSport(this.state.sport);
  }

  render() {
    return (
        <div>
          <SportForm
          sport={this.props.sport}
          onSave={this.onClickSave}
          onChange={this.updateFormState}
          defaultDate={this.state.defaultDate}
          />
        </div>
    );
  }
}

AddSport.propTypes = {
  sport: PropTypes.array,
  sportActions: PropTypes.object
};

function getSportByName(sports, name) {
  const sport = sports.filter(sport => sport.name === name);
  if (sport) return sport[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const sportName = ownProps.match.params.sportName;
  let sport = {name: '', openingDate: ''};


  if (sportName && state.sports.length > 0) {
    sport = getSportByName(state.sports, sportName);
  }

  return {
    sport: sport
  };
}


function mapDispatchToProps(dispatch) {
  return {
    sportActions: bindActionCreators(sportActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSport);