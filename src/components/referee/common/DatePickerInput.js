import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DatePickerInput extends Component {
  constructor(props) {
    let startingDate = new Date(props.value);
    super(props);
    this.state = {
      selectedDay: startingDate
    };
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(day) {
    let event = {};
    let target = {};
    target['name'] = 'openingDate';
    target['value'] = day;
    event['target'] = target;
    this.props.handleChange(event);
    this.setState({
      selectedDay: day
    });
  }

  render() {
    return (
      <div>Day Picker</div>
    );
  }
}

DatePickerInput.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default DatePickerInput;
