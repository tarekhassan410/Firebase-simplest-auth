import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";

class AfterLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box card has-text-centered">
        {this.props.status == "login" ? (
          <div className="has-text-info">
            welcome back{" "}
            <span className="has-text-weight-bold"> {this.props.email} </span>,
            you are logged in as a{" "}
            <span className="has-text-weight-bold">
              {" "}
              {this.props.identity}{" "}
            </span>
          </div>
        ) : (
          <div className="has-text-info">
            Thank you for joining us{" "}
            <span className="has-text-weight-bold"> {this.props.email} </span>,
            you are have joined us as a
            <span className="has-text-weight-bold">
              {" "}
              {this.props.identity}{" "}
            </span>
            <br />
            please refresh this page so you can test login page as well.
          </div>
        )}
      </div>
    );
  }
}

export default AfterLogin;
