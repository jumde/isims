import React, { Component } from 'react'
import {Router, Route} from 'react-router'
import ValidatorComponent from './ValidatorComponent'
import ProducerComponent from './ProducerComponent'
import GoToHome from './GoToHome'
import axios from 'axios'
import {withRouter} from 'react-router';
import { Redirect } from 'react-router'


class OrganizationId extends Component {
  constructor(props) {
    super(props)
    this.state = {
      organization_id: "",
      is_validator: false,
      is_producer: false,
      redirect: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({organization_id: event.target.value});
  }

  handleSubmit(event) {
    let org_id = this.state.organization_id
    axios.get('http://localhost:3000/organizations/'+org_id+'.json')
    .then(response => {
      console.log(response)
      this.setState({is_validator: response.data.is_validator, is_producer: response.data.is_producer})
    })
    .then(() => this.setState({ redirect: true }))
    event.preventDefault();
  }

  // componentDidMount() {
  //   axios.get('http://localhost:3000/')
  //   .then(response => {
  //     console.log(response)
  //     this.setState({ideas: response.data})
  //   })
  //   .catch(error => console.log(error))
  // }

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
         <div className="AddSpace"/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Organization ID: <br/>
            <input type="text" name="name" value={this.state.organization_id} onChange={this.handleChange}/>
          </label>
          <br/>
          <input className="SmallGreenButton" type="submit" value="Submit" />
        </form>

        // { this.state.is_validator ? <ValidatorComponent /> : null }
        // { this.state.is_producer ? <ProducerComponent /> : null }
      </div>
    )
  }
}

export default OrganizationId;
