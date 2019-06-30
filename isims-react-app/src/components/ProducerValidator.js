import React, { Component } from 'react';
import {withRouter} from 'react-router';
import GoToHome from './GoToHome';

const ProducerButton = withRouter(({ history }) => (
  <div className="AddSpace">
  <button
    className="GreenButton"
    type='button'
    onClick={() => { history.push('/newexisting_entity') }}
  >
    I am Producer
  </button>
  </div>
))

const ValidatorButton = withRouter(({ history }) => (
  <div className="AddSpace">
  <button
    className="GreenButton"
    type='button'
    onClick={() => { history.push('/organization_id') }}
  >
    I am Validator
  </button>
  </div>
))
class ProducerValidator extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <GoToHome/>
      </div>
      {this.props.location.state.is_validator ? < ValidatorButton/> : null}
      {this.props.location.state.is_producer ? < ProducerButton /> : null }
      </div>
    )
  }
}

export default ProducerValidator;
