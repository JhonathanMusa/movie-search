import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export const Movie = (props) => {
  const { id, poster, title, year } = props;
  return (
    <Link to={`/detail/${id}`} className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={poster} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p>{id}</p>
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{year}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  id: PropTypes.string,
  poster: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
};
