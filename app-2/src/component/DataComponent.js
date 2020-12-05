import React, { Component } from 'react';

class DataComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: ['oatmeal', 'protein shake', 'chicken salad', 'rice cakes', 'scramble eggs'],
    };
  }

  render() {
    const dataElement = this.state.data.map((value, index) => {
      return (
        <div>
          <h2>{value}</h2>
        </div>
      );
    });
    return (
      <div>
        {dataElement}
      </div>
    );
  }
}

export default DataComponent;
