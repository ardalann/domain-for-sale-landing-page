import React from "react";
import EmailObfuscate from "email-obfuscate/lib/emailObfuscate";

class Email extends React.Component {
  componentDidMount() {
    if (this.containerNode) {
      EmailObfuscate(this.containerNode, {
        name: "contact",
        domain: this.props.domain,
        tld: this.props.tld,
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
