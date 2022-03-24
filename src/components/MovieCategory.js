import React, { useState, useEffect } from "react";
import "./MovieList.css";
import axios from "axios";

function MovieCategory() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.omdbapi.com/?s=star%20wars&type=series&apikey=9a7e9844"
    );
    setMovies(response.data.Search);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3 className="int-text">Star Wars Series</h3>
      <div className="container-fluid movie-app">
        <div class="row">
          {movies?.length
            ? movies.map((movie) => (
                <>
                  <img src={movie.Poster} alt="" />
                </>
              ))
            : "No Movie Searched"}
        </div>
      </div>
    </div>
  );
}

export default MovieCategory;
