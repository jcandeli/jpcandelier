import React from 'react';
import { MainNav } from 'components/photography/navigation.jsx';

export const Home = React.createClass({
    render() {
        return (
            <div>
                <MainNav></MainNav>
                {this.props.children}
            </div>
        );
    }
});