import React, { Component } from 'react'
import {Router, Route} from 'react-router'
import ProducerValidator from './ProducerValidator'
import {withRouter} from 'react-router';
import '../App.css';

const Button = withRouter(({ history }) => (
  <button
    className='Proceed'
    type='button'
    onClick={() => { history.push('/organization_id') }}
  >
    Proceed
  </button>
))

class HomePage extends Component {
  render() {
    return (
      <Button />
    )
  }
}

export default HomePage;
