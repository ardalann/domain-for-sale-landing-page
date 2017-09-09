import React from "react";
import { H1, Strong } from "glamorous";
import queryString from "query-string";

import Container from "./Container";
import A from "./A";
import Email from "./Email";

class LandingPage extends React.Component {
  render() {
    const { availableDomains } = this.props;
    const { q } = queryString.parse(location.search); // eslint-disable-line

    const validDomainRequested = availableDomains.indexOf(q) > -1;

    return (
      <Container>
        {validDomainRequested ? (
          <H1 fontWeight={300} marginBottom={100}>
            <Strong fontWeight={700}>Congratulations!</Strong>
            <br />
            <A href={`http://${q}`}>{q}</A>
            <br />
            is for sale.
          </H1>
        ) : (
          <H1 fontWeight={300} marginBottom={100}>
            Page not found.
          </H1>
        )}
        {validDomainRequested && <Email />}
      </Container>
    );
  }
}

export default LandingPage;
