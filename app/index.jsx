"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello Saturday!
      </div>
    )
  }
}

ReactDOM.render(<Hello></Hello>, document.getElementById("root"));