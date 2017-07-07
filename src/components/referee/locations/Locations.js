import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as locationActions from '../../../actions/locations';

import List from '../common/List';
import Modal from '../common/Modal';
import LocationListPreview from './LocationListPreview';
import LocationModalForm from './LocationModalForm';

class Locations extends Component {
  constructor(props) {
    let date = new Date();
    super(props);
    this.state = {
      location: {
        name: ''
      },
      modalTitle: 'Add a new Location'
    };
    this.updateFormState = this.updateFormState.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.createLocation = this.createLocation.bind(this);
    this.removeLocation = this.removeLocation.bind(this);
    this.clearLocation = this.clearLocation.bind(this);
  }

  componentWillMount() {
    this.props.locationActions.loadLocations();
  }

  updateFormState(event) {
    const field = event.target.name;
    let location = this.state.location;
    location[field] = event.target.value;
    this.setState({location: location});
  }

  setLocation(location) {
    let title = 'Edit ' + location.name;
    this.setState({
      location: location,
      modalTitle: title
    });
  }

  createLocation() {
    this.props.locationActions.saveLocation(this.state.location);
  }

  removeLocation() {
    this.props.locationActions.removeLocation(this.state.location);
  }

  clearLocation() {
    this.setState({
      location: {
        name: ''
      },
      modalTitle: 'Add a new Location'
    });
  }

  render() {
    return (
      <div>
        <h1>Location Admin</h1>
        <button className="btn btn-outline-primary" data-toggle="modal" data-target="#modal" onClick={this.clearLocation}>
          New Location
        </button>
        <Modal item={this.state.location}
               modalTitle={this.state.modalTitle}
               onChange={this.updateFormState}
               deleteButton={this.removeLocation}
               saveButton={this.createLocation}
               modalForm={LocationModalForm} />
        <br />
        <List list={this.props.locations}
              setItem={this.setLocation}
              previewComponent={LocationListPreview} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    locations: state.locations
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Locations);
