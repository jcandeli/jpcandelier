import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="inline-block padded-lg">
          <a href="mailto:jpcandelier@gmail.com">
            <img
              src="/img/email.svg"
              className="email-icon"
              alt="JP Candelier email"
            />
          </a>
          <span className="inline-block padded-sm-left">
            jpcandelier&#64;gmail.com
          </span>
        </div>

        <div className="float-right">
          <a
            href="https://github.com/jcandeli/jpcandelier"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/github-logo.svg"
              className="github-logo"
              alt="JP Candelier Github"
            />
          </a>
        </div>
      </footer>
    );
  }
}
