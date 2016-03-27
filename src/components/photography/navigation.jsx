import React from 'react';
import { Link } from 'react-router';

export let MainNav = React.createClass({
    render() {
        return (
            <div className="nav">
                <ul>
                    <li><Link to={{ pathname: "gallery", query: {galleryType: "travel"} }} activeClassName="selected">Travel</Link></li>
                    <li><Link to={{ pathname: "gallery", query: {galleryType: "life"} }} activeClassName="selected">Life</Link></li>
                    <li><Link to={{ pathname: "gallery", query: {galleryType: "bands"} }} activeClassName="selected">Bands</Link></li>
                    <li><Link to={{ pathname: "gallery", query: {galleryType: "film"} }} activeClassName="selected">Film</Link></li>
                </ul>
            </div>
        );
    }
}); 

