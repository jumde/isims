import React, { Component } from 'react';
import {withRouter} from 'react-router';

const ValidatorButton = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/organization_id') }}
  >
    I am validator
  </button>
))
class ValidatorComponent extends Component {
  render() {
    return (
      <div>
      <ValidatorButton />
      </div>
    )
  }
}

export default ValidatorComponent;
