import React, { useEffect, useState } from "react";
import axios from "axios";

const OMDB_KEY = "1989edaf";

export default function Detail(props) {
  const [movie, setMovies] = useState({});

  const { movieId } = props.match.params;

  useEffect(() => {
    const fetch = async ({ id }) => {
      try {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${id}`
        );
        setMovies({
          Title: data.Title,
          Poster: data.Poster,
          Actors: data.Actors,
          Metascore: data.Metascore,
          Plot: data.Plot,
        });
        console.log({ data });
      } catch (error) {
        console.log(error);
      }
    };
    fetch({ id: movieId });
  }, [movieId]);

  return (
    <div className="container">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Actors}</h3>
      <span>{movie.Metascore}</span>
      <p>{movie.Plot}</p>
    </div>
  );
}
