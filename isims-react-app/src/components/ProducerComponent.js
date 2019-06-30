import React, { Component } from 'react';
import {withRouter} from 'react-router';

const ProducerButton = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/newexisting_entity') }}
  >
    I am Producer
  </button>
))

class ProducerComponent extends Component {
  render() {
    return (
      <div>
      <ProducerButton />
      </div>
    )
  }
}

export default ProducerComponent;
