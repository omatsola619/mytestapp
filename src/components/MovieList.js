import React from "react";
import "./MovieList.css";

function MovieList({ movies }) {
  return (
    <div>
      <div className="container-fluid movie-app">
        <div class="row">
          {movies?.length ? (
            movies.map((movie) => (
              <div className="mid" key={movie.imdbID}>
                <img src={movie.Poster} alt="" />
              </div>
            ))
          ) : (
            <h3 className="empty">No Movie Searched...</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
