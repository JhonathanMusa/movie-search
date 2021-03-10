import React, { useState } from "react";
import { Title } from "../components/Title";
import { SearchMovie } from "../components/SearchMovie";
import { MoviesList } from "../components/MoviesList";

const Home = () => {
  const [movieResults, setMovieResults] = useState([]);

  const handleResults = (results) => {
    setMovieResults(results);

  };

  const renderResults = () => {
    return movieResults.length === 0 ? (
      <p>Sin resultados</p>
    ) : (
      <MoviesList movies={movieResults} />
    );
  };

  return (
    <div className="App">
      <Title>Search Movie</Title>
      <div className="SearchForm-wrapper">
        <SearchMovie onResults={handleResults} />
      </div>
      {renderResults()}
    </div>
  );
};

export default Home;
