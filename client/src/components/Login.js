import React, {Component} from "react";
import {NavLink, Redirect} from "react-router-dom";
import "./login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    tohome: false
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({tohome: true});
  };

  handleFacebookBtn = event =>{
    event.preventDefault();
    document.location.replace("/login/facebook")
  };

  handleGoogleBtn = event =>{
    event.preventDefault();
    document.location.replace("/auth/google")
  }; 
 
  render() {
      if (this.state.tohome === true) {
        return <Redirect to='/home' />
      }
    return (
      <div className="container">
        <img id="logo" src="https://image.ibb.co/kn5pgo/potlucky_logo.png" alt="potlucky_logo"/>
        <form class="forms">
          <p>Username: {this.state.username}</p>
          <input
          type="text"
          placeholder=""
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
          />
          <p>Password: {this.state.password}</p>
          <input
          type="password"
          placeholder=""
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          />
          <div className="submitBox"><button class="submit" onClick={this.handleFormSubmit}>Submit</button></div>
          <p><NavLink to="">Create Account</NavLink></p>
        </form>
        

        <div class="otherlogins">
          <button class="login" id="facebook" onClick={this.handleFacebookBtn}>Facebook Login</button>
          <button class="login" id="google" onClick={this.handleGoogleBtn}>Google Login</button>
          <button class="login" id="meetup">Meetup Login</button>
        </div>
      </div>
    );
  }
}

export default Login;