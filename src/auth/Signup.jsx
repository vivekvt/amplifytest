import React, { Component } from "react";

import { Auth } from "aws-amplify";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signUp = async () => {
    try {
      const user = await Auth.signUp({
        username: "vivekvt",
        password: "vivekvtvt",
        attributes: {
          email: "contactvivekvt@gmail.com", // optional
          name: "vivek",
          // phone_number: 7276864773,
          // optional - E.164 number convention
          // other custom attributes
        },
      });
      console.log({ user });
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  render() {
    return <button onClick={this.signUp}>Click</button>;
  }
}
