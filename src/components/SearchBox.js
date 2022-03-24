import React from "react";
import "../App.css";

function SearchBox({ change, value }) {
  return (
    <div class="search-field">
      <div class="search-text">Search</div>
      <input
        type="text"
        value={value}
        onChange={change}
        className="form-control search-box"
        placeholder="type a movie to search for"
      />
    </div>
  );
}

export default SearchBox;
