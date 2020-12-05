import React, { Component } from 'react';

class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      inputBox: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      inputBox: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        ></input>
        <p>{this.state.inputBox}</p>
      </div>
    );
  }
}

export default FormComponent;
