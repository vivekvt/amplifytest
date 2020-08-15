import React, { Component } from "react";
import "./App.css";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Signup from "./auth/Signup";
Amplify.configure(aws_exports);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedUp: false,
    };
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup() {
    this.setState({
      signedUp: true,
    });
  }
  render() {
    const { signedUp } = this.state;
    // return (
    //   <div>
    //     SignOut <br>npm </br>
    //     <AmplifySignOut />
    //   </div>
    // );
    // return !signedUp ? (
    //   <SignUpForm handleSignup={this.handleSignup} />
    // ) : (
    //   <SignInForm />
    // );
    return (
      <div>
        <Signup />
      </div>
    );
  }
}

export default App;
// export default withAuthenticator(App);
