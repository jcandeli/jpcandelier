import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Thumb from './Thumb';
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
        const {
            photos,
            currentIndex
        } = this.props;

        return (
            <div className="mosaic">
                {
                    photos.map((photo, index) => (
                        <Thumb
                            photo={photo}
                            onClick={() => this.props.onSelect(index)}
                            selected={(currentIndex === index)}
                            key={index}
                        />
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = ({
    photos,
    selectedCategory,
    selectPhoto,
    deselectPhoto,
    currentIndex
}) => ({
    photos,
    selectedCategory,
    selectPhoto,
    deselectPhoto,
    currentIndex
});

MosaicComponent.propTypes = {
    columns: PropTypes.number,
    selectedCategory: PropTypes.string,
    photos: PropTypes.array,
    selectPhoto: PropTypes.func,
    deselectPhoto: PropTypes.func,
    onSelect: PropTypes.func,
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
