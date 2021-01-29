import React, { Component } from "react";
import { Title } from "./components/Title";
import { Movie } from "./components/Movie";
import { SearchMovie } from "./components/SearchMovie";
import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  state = {
    movieResults: [],
  };

  _handleResults = (results) => {
    this.setState({
      movieResults: results,
    });
  };

  _renderResults() {
    const { movieResults } = this.state;
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
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movie</Title>
        <div className="SearchForm-wrapper">
          <SearchMovie onResults={this._handleResults} />
        </div>
        {this._renderResults()}
      </div>
    );
  }
}

export default App;
