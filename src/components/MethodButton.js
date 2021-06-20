import React, { Component } from 'react';

export default class MethodButton extends Component {
  methodText = el => {
    let text = this.props.text;
    this.props.clickMethod(text);
  };
  render() {
    return (
      <button
        style={{ display: this.props.shown }}
        onClick={el => this.methodText()}
      >
        {this.props.text}
      </button>
    );
  }
}
