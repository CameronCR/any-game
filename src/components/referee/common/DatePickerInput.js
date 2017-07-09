import React, { Component } from 'react';
import DatePicker from 'react-bootstrap-date-picker';

class DatePickerInput extends Component {
  constructor(props) {
    let value = new Date().toISOString();
    super(props);
    this.state = {
      value: value
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, formattedValue) {
    this.setState({
      value: value,
      formattedValue: formattedValue
    });
  }
  render() {
    return (
      <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
    );
  }
}

export default DatePickerInput;
