import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/photos';

export class ImagePanel extends Component {
    render() {
        const { photo } = this.props;
        return (
            <div className="image-panel">
                <img src={`/img/${photo.category}/${photo.image}`} />
            </div>
        );
    }
}

function mapStateToProps({ selectedPhoto }) {
  return { photo: selectedPhoto };
}

export default connect(
  mapStateToProps,
  actions
)(ImagePanel);
