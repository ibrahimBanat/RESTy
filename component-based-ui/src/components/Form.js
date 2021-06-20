import React, { Component } from 'react';
import MethodButton from './MethodButton';
import RenderMethod from './RenderMethod';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
    };
  }
  handleButtonClick = el => {
    this.setState({ method: el });
  };
  render() {
    return (
      <div>
        <form class=''>
          <label for='url--input' class=''>
            URL:
          </label>
          <input
            id='url--input'
            onChange={event => this.setState({ url: event.target.value })}
          />
          <button>GO!</button>
          <h2 class=''>{this.state.method}</h2>
        </form>
        <MethodButton clickMethod={this.handleButtonClick} text={'GET'} />
        <MethodButton clickMethod={this.handleButtonClick} text={'POST'} />
        <MethodButton clickMethod={this.handleButtonClick} text={'PUT'} />
        <MethodButton clickMethod={this.handleButtonClick} text={'DELETE'} />
        <RenderMethod />
      </div>
    );
  }
}

export default Form;
