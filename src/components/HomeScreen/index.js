import React from "react";
import { Img } from "glamorous";

import Container from "./Container";
import Email from "../Email";
import logo from "../../assets/logo.png";

class LandingPage extends React.Component {
  render() {
    return (
      <Container>
        <Img src={logo} width={282} marginBottom={150} />
        <Email domain="boundlessweb" tld="ca" />
      </Container>
    );
  }
}

export default LandingPage;
