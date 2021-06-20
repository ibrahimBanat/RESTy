import React, { Component } from 'react';
import Form from './Form';
import RenderMethod from './RenderMethod';
class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Form />
        <RenderMethod />
      </div>
    );
  }
}

export default Main;
