import React from "react";
import PropTypes from "prop-types";

export const Movie = ({ id, poster, title, year }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={poster} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.string,
  poster: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
};
