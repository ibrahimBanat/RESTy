import React, { Component } from 'react';

class RenderMethod extends Component {
  render() {
    return (
      <div>
        {this.props.method} {this.props.text}
      </div>
    );
  }
}

export default RenderMethod;
