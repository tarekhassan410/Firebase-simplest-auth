import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.setStatus = this.setStatus.bind(this);
  }

  setStatus(e) {
    this.props.handleStatus(e);
  }

  render() {
    return (
      <div className="box card">
        <div className="tabs is-toggle is-centered">
          <ul>
            <li
              onClick={this.setStatus}
              className={
                this.props.status == "signup" ? "is-active" : undefined
              }
            >
              <a key="signup">
                <span className="icon is-small">
                  <i className="fas fa-user-plus" aria-hidden="true" />
                </span>
                Join us
              </a>
            </li>
            <li
              onClick={this.setStatus}
              className={this.props.status == "login" ? "is-active" : undefined}
            >
              <a key="login">
                <span className="icon is-small">
                  <i className="fas fa-sign-in-alt" aria-hidden="true" />
                </span>
                Log in
              </a>
            </li>
          </ul>
        </div>
        <LoginForm
          identity={this.props.identity}
          handleIdentity={this.props.handleIdentity}
          handleLogin={this.props.handleLogin}
          error={this.props.error}
          resetError={this.props.resetError}
        />
      </div>
    );
  }
}

export default Login;
