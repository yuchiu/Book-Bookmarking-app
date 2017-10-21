import React from "react"
import {Form, Button} from 'semantic-ui-react'
import Validator from 'validator'

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        password: ''
      },
      loading: false,
      errors: {}
    }
  }

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    })
    console.log(e.target.name)
    console.log(this.state.data.email+', '+this.state.data.password)
  }
  handleSubmit = ()=>{
      const errors = this.validate(this.state.data)
      this.setState({errors})
  }
  validate= (data)=>{
      const errors = {}
      if(!Validator.isEmail(data.email)){
          errors.email = "invalid email"
      }
      if(!data.password) {
          errors.password="can't be blank"
      }
      return errors
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={this.state.data.email}
            onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={this.state.data.password}
            onChange={this.handleChange}/>
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    )
  }
}

export default LoginForm