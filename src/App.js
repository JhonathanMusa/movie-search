import React, { useState } from "react";
import { Title } from "./components/Title";
import { Movie } from "./components/Movie";
import { SearchMovie } from "./components/SearchMovie";
import "./App.css";
import "bulma/css/bulma.css";

function App() {
  const [movieResults, setMovieResults] = useState([]);

  const handleResults = (results) => {
    setMovieResults(results);
  };

  const renderResults = () => {
    return movieResults.map((movie) => {
      return (
        <Movie
          className="MoviesList-item"
          key={movie.imdbID}
          poster={movie.Poster}
          title={movie.Title}
          year={movie.Year}
        />
      );
    });
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
}

export default App;
