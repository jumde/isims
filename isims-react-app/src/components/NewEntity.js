import React, { Component } from 'react'
import {Router, Route} from 'react-router'
import ValidatorComponent from './ValidatorComponent'
import ProducerComponent from './ProducerComponent'
import GoToHome from './GoToHome'
import axios from 'axios'
import {withRouter} from 'react-router';
import { Redirect } from 'react-router'


const NewEntityButton = withRouter(({ history }) => (
  <div className="AddSpace">
  <button
    className="GreenButton"
    type='button'
    onClick={() => { history.push('/new_entity') }}
  >
    New Entity
  </button>
  </div>
))

const ExistingList = withRouter(({ history }) => (
  <div className="AddSpace">
  <button
    className="GreenButton"
    type='button'
    onClick={() => { history.push('/existing_entity') }}
  >
    Existing Entity
  </button>
  </div>
))
class NewExistingEntity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      organization_id: "",
      is_validator: false,
      is_producer: true,
      new_entity: true,
      existing_entity: true,
      redirect: false
    }
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
        return <Redirect to= {{
          pathname: 'producer-validator',
          state: {is_validator: this.state.is_validator, is_producer: this.state.is_producer}
        }}/>;
    }
    return (
        <div className="App">
        <div className="App-header">
        <GoToHome/>
        </div>
        What would you like to add?
        <EntityList/>
        </div>
    )
  }
}

export default NewExistingEntity;
