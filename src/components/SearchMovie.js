import React, { Component } from "react";

const OMDB_KEY = "1989edaf";

export class SearchMovie extends Component {
  state = {
    searchInput: "",
  };

  _handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  _handleSubmit = (e) => {
    const { searchInput } = this.state;
    e.preventDefault();

    fetch(`http://www.omdbapi.com/?apikey=${OMDB_KEY}&s=${searchInput}`)
      .then((res) => res.json())
      .then((result) => {
        const { Search = [], totalResults = 0 } = result;
        console.log({ Search, totalResults });
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input
          className="input is-primary"
          onChange={this._handleChange}
          placeholder="Search Movie.."
        />
        <button className="button is-primary">Search</button>
      </form>
    );
  }
}
