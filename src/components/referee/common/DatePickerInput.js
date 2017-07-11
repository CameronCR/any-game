import React, { Component } from 'react';
import PropTypes from 'prop-types'
import DatePicker from 'react-bootstrap-date-picker';

class DatePickerInput extends Component {
  constructor(props) {
    let value = new Date().toISOString();
    props.handleChange(value);
    super(props);
    this.state = {
      value: value
    };
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <input value={this.state.value} />
        DatePicker
      </div>
    );
  }
}

DatePickerInput.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default DatePickerInput;
