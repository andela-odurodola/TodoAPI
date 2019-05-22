import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <div>
      <h4 style={{textAlign: 'center'}}>SIGN UP </h4>
        <form>
        <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input type="name" className="form-control" placeholder="Enter name"/>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email </label>
            <input type="email" className="form-control" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="PasswordConfirmation">Password Confirmation</label>
            <input type="PasswordConfirmation" className="form-control" placeholder="Enter Password Confirmation"/>
          </div>
          <input type="submit" className="btn btn-primary" value="Sign Up"/>
        </form>
      </div>
    )
  }
}
