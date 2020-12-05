import React, { Component } from 'react';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['chocolate', 'bread', 'cheese', 'butter', 'chocorramo'],
      input: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    const display = this.state.data
      .filter((val) => val.includes(this.state.input))
      .map((val) => {
        return <p>{val}</p>;
      });

    return (
      <div>
        <p>Search Component</p>
        <input value={this.state.input} onChange={this.handleInputChange}></input>
        {display}
      </div>
    );
  }
}

export default SearchComponent;
