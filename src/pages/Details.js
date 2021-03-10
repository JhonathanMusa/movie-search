import React, { useEffect, useState } from "react";
import axios from "axios";
import BtnBackHome from "../components/BtnBackHome";

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
      } catch (error) {
        console.log(error);
      }
    };
    fetch({ id: movieId });
  }, [movieId]);

  return (
    <div className="container is-fluid">
      <img src={movie.Poster} alt={movie.Title} />
      <strong>
        <p>{movie.Title}</p>
      </strong>
      <p>{movie.Actors}</p>
      <span>{movie.Metascore}</span>
      <p>{movie.Plot}</p>
      <BtnBackHome />
    </div>
  );
}
