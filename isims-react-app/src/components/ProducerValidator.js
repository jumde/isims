import React, { Component } from 'react';
import {withRouter} from 'react-router';

const ProducerButton = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/organization_id') }}
  >
    I am Producer
  </button>
))

const ValidatorButton = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/organization_id') }}
  >
    I am validator
  </button>
))
class ProducerValidator extends Component {
  render() {
    return (
      <div>
      {this.props.location.state.is_validator? < ValidatorButton/> : null}
      {this.props.location.state.is_producer? < ProducerButton /> : null }
      </div>
    )
  }
}

export default ProducerValidator;
