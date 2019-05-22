import React, { Component } from 'react'

export default class SignIn extends Component {
  render() {
    return (
      <div>
      <h4 style={{textAlign: 'center'}}>SIGN IN </h4>
        <form>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email" className="form-control" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <input type="submit" className="btn btn-primary" value="Sign In"/>
        </form>
      </div>
    )
  }
}
