import axios from "axios";
import React, { useState } from "react";

const OMDB_KEY = "1989edaf";

export const SearchMovie = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://www.omdbapi.com/?apikey=${OMDB_KEY}&s=${searchInput}`)
      .then((result) => {
        const { Search = [], totalResults = 0 } = result.data;
        console.log({ Search, totalResults });
        props.onResults(Search);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input is-primary"
            onChange={handleChange}
            placeholder="Search Movie.."
            type="text"
          />
        </div>
        <div className="control">
          <button className="button is-primary">Search</button>
        </div>
      </div>
    </form>
  );
};
