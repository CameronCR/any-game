import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';

class DatePickerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: new Date()
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
      <div>
        <DayPicker
          name="openingDate"
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
      </div>
    );
  }
}

DatePickerInput.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default DatePickerInput;
