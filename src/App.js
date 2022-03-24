import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import MovieCategory from "./components/MovieCategory";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchQuery, setSearchQuery] = useState();
  const [timeoutId, setTimeoutId] = useState();
  const [movieList, setMovieList] = useState([]);

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchString}&apikey=9a7e9844`
    );
    setMovieList(response.data.Search);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    setSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    setTimeoutId(timeout);
  };

  return (
    <div className="app">
      <header>
        <div class="logo">MyTestApp</div>
      </header>
      <div class="intro">
        <div class="intro-text">
          Watch <br /> something <br /> incredible.
        </div>
      </div>
      {/*search field starts here */}
      <SearchBox change={onTextChange} value={searchQuery} />
      <div class="list">
        {/*movie list here */}
        <h3 className="int-text">Searched Movies</h3>
        <MovieList movies={movieList} />
        {/*movies category section */}
        <MovieCategory />
      </div>
    </div>
  );
}

export default App;
