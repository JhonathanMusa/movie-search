import React from "react";
import PropTypes from "prop-types";
import { Movie } from "./Movie";

export const MoviesList = (props) => {
  const { movies } = props;
  return (
    <div className="MoviesList">
      {movies.map((movie) => {
        return (
          <div key={movie.imdbID} className="MovieList-item">
            <Movie
              id={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
            />
          </div>
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};
