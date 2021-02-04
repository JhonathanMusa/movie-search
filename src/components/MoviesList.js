import React from "react";
import PropTypes from "prop-types";
import { Movie } from "./Movie";

export const MoviesList = (props) => {
  return (
    <div className="MoviesList">
      {props.movies.map((movie) => {
        return (
          <Movie
            className="MoviesList-item"
            key={movie.imdbID}
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
          />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};


