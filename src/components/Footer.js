import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
           <footer>
                <span className="inline-block padded-lg">jpcandelier&#64;gmail.com</span>

                <a href="https://github.com/jcandeli/jpcandelier" target="_blank">
                    <img
                        src="/img/github-logo.svg"
                        className="github-logo"
                        alt="JP Candelier Github"
                    />
                </a>
           </footer>
        );
    }
}
