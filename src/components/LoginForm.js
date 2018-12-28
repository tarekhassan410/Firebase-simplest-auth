import React from "react";
import ReactDOM from "react-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _email: "",
      _password: "",
      identityError: ""
    };

    this.setIdentitiy = this.setIdentitiy.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  setIdentitiy(e) {
    this.props.handleIdentity(e);
  }

  setEmail(e) {
    this.setState(
      {
        _email: e.target.value
      },
      this.props.resetError
    );
  }

  setPassword(e) {
    this.setState(
      {
        _password: e.target.value
      },
      this.props.resetError
    );
  }

  handleLogin() {
    this.props.identity == ""
      ? this.setState({ identityError: "Please select student or teacher" })
      : this.setState(
          { identityError: "" },
          this.props.handleLogin(this.state._email, this.state._password)
        );
  }

  render() {
    return (
      <div>
        {/* email field*/}
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email or Username"
              value={this.state._email}
              onChange={this.setEmail}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
          </p>
        </div>
        {/* password field*/}
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={this.state._password}
              onChange={this.setPassword}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        {/* handling error */}
        {this.props.error != "" && (
          <div className="field has-text-danger">{this.props.error}</div>
        )}
        {/* submit */}
        <div className="field">
          <button className="button is-info" onClick={this.handleLogin}>
            {" "}
            Submit{" "}
          </button>
        </div>

        {/* Asking user if he is student or teacher */}
        <div className="field has-text-centered">
          <div className="subtitle is-size-5" style={{ paddingBottom: "10px" }}>
            Are you student or teacher?
            <span className="field has-text-danger">
              <br /> {this.state.identityError}{" "}
            </span>
            <div className="buttons is-centered" style={{ paddingTop: "12px" }}>
              <button
                className={
                  this.props.identity == "student"
                    ? "button is-info"
                    : "button is-info is-outlined"
                }
                value="student"
                onClick={this.setIdentitiy}
              >
                Student
              </button>
              <button
                className={
                  this.props.identity == "teacher"
                    ? "button is-info"
                    : "button is-info is-outlined"
                }
                value="teacher"
                onClick={this.setIdentitiy}
              >
                {" "}
                Teacher{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
