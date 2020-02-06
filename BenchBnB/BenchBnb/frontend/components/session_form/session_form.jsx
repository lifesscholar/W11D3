import React from "react";
import { Link, Redirect } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    // debugger
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }



  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }



  render() {
    // debugger
    let errors;
    if (this.props.errors) {
      errors = (
        <ul>
          {
            this.props.errors.map(error => (
              <li key={error}>
                {error}
              </li>
            ))
          }
        </ul>
      )
    }
    
    let linkPath = this.props.formType === "signup" ? "/login" : "/signup";
    let linkName = this.props.formType === "signup" ? "Log In" : "Sign Up";
    let title = this.props.formType === "signup" ? "sign up" : "log in" ;
    

    const notLoggedReturn = (
      <>
        <h2>This is the {title} page</h2>
        <Link to={linkPath}>{linkName}</Link>
        {errors}
        <form>
          <label>Username:
              <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput("username")}
            />
          </label>
          <label>Password:
              <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
          </label>
          <button onClick={this.handleSubmit}>{title}</button>
        </form>
      </>
    )

    const loggedReturn = (
      <Redirect to="/"/>
    )
    // debugger
    const returnValue = (this.props.loggedIn ? loggedReturn : notLoggedReturn);


    return (
      returnValue
    )
  }
}

export default SessionForm;