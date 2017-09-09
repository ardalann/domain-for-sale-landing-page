import React from "react";
import EmailObfuscate from "email-obfuscate";

class Email extends React.Component {
  componentDidMount() {
    if (this.containerNode) {
      EmailObfuscate(this.containerNode, {
        name: "contact",
        domain: "ardalan",
        tld: "me",
        // Alternate Text
        altText: "Email"
      });
    }
  }
  storeRef = node => {
    this.containerNode = node;
  };
  render() {
    return <div ref={this.storeRef} />;
  }
}

export default Email;
