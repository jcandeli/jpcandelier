import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Thumb from '../Thumb';
import ImagePanel from '../ImagePanel';
import { actions } from '../../redux/photos';

export class Mosaic extends Component {
    render() {
        const { columns, photos, selectPhoto, selectedPhoto, expandRow, expandedRow } = this.props;
        const rows = [];
        let row = [];

        photos.forEach((photo, index) => {
            row.push(<Thumb photo={photo} onClick={selectPhoto} />);

            if (((index + 1) % columns) === 0) {
                let rowIndex = Math.floor(index/columns);
                rows.push(
                    <div className="row" onClick={() => expandRow(rowIndex)}>
                        <div className="thumbs">{row}</div>
                        {
                            (expandedRow === rowIndex && selectedPhoto)
                            ? <ImagePanel photo={selectedPhoto} />
                            : null 
                        }
                    </div>
                );
                row = []; // reset row
            }
        });

        return (<div className="mosaic">{rows}</div>);
    }
}

function mapStateToProps({ selectedCategory, selectedPhoto, expandRow, expandedRow }) {
  return { selectedCategory, selectedPhoto, expandRow, expandedRow };
}

Mosaic.propTypes = {
    columns: PropTypes.number,
    selectedCategory: PropTypes.string,
    selectedPhoto: PropTypes.object,
    photos: PropTypes.array,
    selectPhoto: PropTypes.func,
    expandRow: PropTypes.func,
    expandedRow: PropTypes.number
};

export default connect(
  mapStateToProps,
  actions
)(Mosaic);
