import React, { Component } from 'react'
import {Router, Route} from 'react-router'
import ProducerValidator from './ProducerValidator'
import {withRouter} from 'react-router';
import '../App.css';

const Button = withRouter(({ history }) => (
  <button
    className="ISIMSButton"
    type='button'
    onClick={() => { history.push('/') }}
  >
    ISIMS<br/>
    <p className="SmallFont">International Secure Identity Management System</p>
  </button>
))

class GoToHome extends Component {
  render() {
    return (
      <Button />
    )
  }
}

export default GoToHome;
