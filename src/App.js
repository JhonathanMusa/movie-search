import React, { useState } from "react";
import { Title } from "./components/Title";
import { SearchMovie } from "./components/SearchMovie";
import { MoviesList } from "./components/MoviesList";
import "./App.css";
import "bulma/css/bulma.css";

function App() {
  const [movieResults, setMovieResults] = useState([]);

  const handleResults = (results) => {
    setMovieResults(results);
  };

  const renderResults = () => {
    return <MoviesList movies={movieResults} />;
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
