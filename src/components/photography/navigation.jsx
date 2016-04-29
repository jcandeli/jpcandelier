import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { selectGalleryAction } from 'actions/photography-actions';

export const MainNav = React.createClass({
    render: function({selectGallery}) {
        return (
            <div className="nav">
                <ul>
                    <li onClick={() => selectGallery("travel")}>
                        <Link
                            to={{ pathname: "gallery", query: {galleryType: "travel"} }}
                            activeClassName="selected"
                        >
                            Travel
                        </Link>
                    </li>

                    <li onClick={() => selectGallery("life")}>
                        <Link
                            to={{ pathname: "gallery", query: {galleryType: "life"} }}
                            activeClassName="selected"
                        >
                            Life
                        </Link>
                    </li>

                    <li onClick={() => selectGallery("bands")}>
                        <Link
                            to={{ pathname: "gallery", query: {galleryType: "bands"} }}
                            activeClassName="selected"
                        >
                            Bands
                        </Link>
                    </li>

                    <li onClick={() => selectGallery("film")}>
                        <Link
                            to={{ pathname: "gallery", query: {galleryType: "film"} }}
                            activeClassName="selected"
                        >
                            Film
                        </Link>
                    </li>

                </ul>
            </div>
        );
    }
});


// MainNav.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     selectGallery: PropTypes.func.isRequired
// };


const mapDispatchToProps = function(dispatch) {
    return {
        selectGallery: function(galleryType) {
            dispatch(selectGalleryAction(galleryType));
        }
    }
};

export default connect(null, mapDispatchToProps)(MainNav);
