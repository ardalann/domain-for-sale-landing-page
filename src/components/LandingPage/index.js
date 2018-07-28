import React from "react";
import { H1, Strong } from "glamorous";

import Container from "./Container";
import A from "./A";
import Email from "../Email";

class LandingPage extends React.Component {
  render() {
    const { queriedDomain } = this.props;

    return (
      <Container>
        <H1 fontWeight={300} marginBottom={100}>
          <Strong fontWeight={700}>Congratulations!</Strong>
          <br />
          <A href={`http://${queriedDomain}`}>{queriedDomain}</A>
          <br />
          is for sale.
        </H1>
        <Email domain="ardalan" tld="me" />
      </Container>
    );
  }
}

export default LandingPage;
