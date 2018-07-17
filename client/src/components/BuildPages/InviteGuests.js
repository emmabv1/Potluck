import React, {Component} from "react";
import {NavLink, Redirect} from "react-router-dom";

class InviteGuests extends Component {
    state = {
      toevents: false
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      this.setState({toevents: true});
    };
  
    render() {
        if (this.state.toevents === true) {
          return <Redirect to='/events'/>
        }
      return (
          <div className="container">
            <NavLink to="/home"><img className="logo" src="https://image.ibb.co/kn5pgo/potlucky_logo.png" alt="potlucky_logo"/></NavLink>
            <div className="title">
              <h2>Potluck Created!</h2>
            </div>
          
            <h3>Invite Your Friends</h3>

            

            <form>
              <div className="info">
                  <p>Get Shareable Link</p>
                  <input
                  type="text"
                  placeholder="/potluck/:id"
                  name="link"
                  />
                  <button>Copy</button>

                  <h4>Your Contacts</h4>
                    <div className="content">
                      <ul>
                        <li>Friend</li>
                        <li>Friend</li>
                        <li>Friend</li>
                        <li>Friend</li>
                        <li>Friend</li>
                      </ul>
                    </div>
              </div>
              <button className="submit"onClick={this.handleFormSubmit}>Send Invitations</button>
                
            </form>
            
          </div>
      );
    }
  }
  
  export default InviteGuests;