import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import AfterLogin from "./components/AfterLogin";

import "./styles.css";
import Entry from "./firebase/Entry";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "signup",
      identity: "",
      email: "",
      password: "",
      loggedin: "false",
      loginMessage: "",
      loginError: ""
    };

    this.handleStatus = this.handleStatus.bind(this);
    this.handleIdentity = this.handleIdentity.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.resetError = this.resetError.bind(this);
  }

  // Login or join us
  handleStatus(e) {
    this.setState({
      status: e._targetInst.key
    });
  }

  // Teacher or student
  handleIdentity(e) {
    this.setState({
      identity: e.target.value
    });
  }

  // reset error
  resetError() {
    this.setState({
      loginError: ""
    });
  }

  // handle authentication with Firebase
  handleLogin(email, password) {
    this.state.status == "login"
      ? //handle sign in with Firebase
        Entry.auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({
              loggedin: "true",
              email: email
            });
          })
          .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            this.setState({
              loginError: errorMessage
            });
            // ...
          })
      : // handle sign up (join us)
        Entry.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(response => {
            this.setState({
              loggedin: "true",
              email: email
            });
          })
          .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            this.setState({
              loginError: errorMessage
            });
            // ...
          });
  }

  render() {
    return (
      <section className="section hero is-fullheight">
        <div className="container columns">
          <div className="column is-offset-6 is-5 has-text-centered">
            {this.state.loggedin == "true" ? (
              <AfterLogin
                status={this.state.status}
                identity={this.state.identity}
                email={this.state.email}
              />
            ) : (
              <Login
                handleIdentity={this.handleIdentity}
                handleStatus={this.handleStatus}
                status={this.state.status}
                identity={this.state.identity}
                handleLogin={this.handleLogin}
                error={this.state.loginError}
                resetError={this.resetError}
              />
            )}
          </div>
        </div>
      </section>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
