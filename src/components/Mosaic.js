import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Thumb from './Thumb';
import ImagePanel from './ImagePanel';
import { actions } from '../redux/photos';

export class MosaicComponent extends Component {
    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            const { selectPhoto, deselectPhoto, currentIndex } = this.props;
            if (e.keyCode === 39) {
                // right arrow
                selectPhoto(currentIndex + 1);
            } else if (e.keyCode === 37) {
                // left arrow
                selectPhoto(currentIndex - 1);
            } else if (e.keyCode === 27) {
                // esc
                deselectPhoto();
            }
        });
    }

    render() {
        const rows = [];
        let row = [];
        const {
            columns,
            photos,
            selectPhoto,
            expandRow,
            expandedRow,
            currentIndex
        } = this.props;

        photos.forEach((photo, index) => {
            row.push(
                <Thumb
                    photo={photo}
                    onClick={() => selectPhoto(index)}
                    selected={(currentIndex === index)}
                />
            );

            if (((index + 1) % columns) === 0) {
                const rowIndex = Math.floor(index / columns);
                rows.push(
                    <div className="row" onClick={() => expandRow(rowIndex)}>
                        <div className="thumbs">{row}</div>
                        {
                            (expandedRow === rowIndex && currentIndex >= 0)
                            ? <ImagePanel
                                photo={photos[currentIndex]}
                                next={() => selectPhoto(currentIndex + 1)}
                                prev={() => selectPhoto(currentIndex - 1)}
                            /> : null
                        }
                    </div>
                );
                row = []; // reset row
            }
        });

        return (<div className="mosaic">{rows}</div>);
    }
}

const mapStateToProps = ({
    selectedCategory,
    selectPhoto,
    deselectPhoto,
    expandRow,
    expandedRow,
    currentIndex
}) => ({
    selectedCategory,
    selectPhoto,
    deselectPhoto,
    expandRow,
    expandedRow,
    currentIndex
});

MosaicComponent.propTypes = {
    columns: PropTypes.number,
    selectedCategory: PropTypes.string,
    photos: PropTypes.array,
    selectPhoto: PropTypes.func,
    deselectPhoto: PropTypes.func,
    expandRow: PropTypes.func,
    expandedRow: PropTypes.number,
    currentIndex: PropTypes.number
};

MosaicComponent.defaultProps = {
    columns: 6
};

const Mosaic = connect(
  mapStateToProps,
  actions
)(MosaicComponent);

export default Mosaic;
