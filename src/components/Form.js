import React, { Component } from 'react';
import MethodButton from './MethodButton';
import RenderMethod from './RenderMethod';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      url: '',
      method: '',
      shown: 'none',
    };
  }
  handleButtonClick = el => {
    this.setState({ method: el });
  };
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ shown: 'inline-block' });
    this.setState({ url: this.state.inputValue });
  }
  render() {
    return (
      <div>
        <form class='' onSubmit={e => this.handleSubmit(e)}>
          <label for='url--input' class=''>
            URL:
          </label>
          <input
            id='url--input'
            onChange={event =>
              this.setState({ inputValue: event.target.value })
            }
          />
          <button>GO!</button>
        </form>
        <MethodButton
          clickMethod={this.handleButtonClick}
          text={'GET'}
          shown={this.state.shown}
        />
        <MethodButton
          clickMethod={this.handleButtonClick}
          text={'POST'}
          shown={this.state.shown}
        />
        <MethodButton
          clickMethod={this.handleButtonClick}
          text={'PUT'}
          shown={this.state.shown}
        />
        <MethodButton
          clickMethod={this.handleButtonClick}
          text={'DELETE'}
          shown={this.state.shown}
        />
        <RenderMethod method={this.state.method} text={this.state.url} />
      </div>
    );
  }
}

export default Form;
