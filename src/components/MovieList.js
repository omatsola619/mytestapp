import React from "react";
import "./MovieList.css";

function MovieList({ movies }) {
  return (
    <div>
      <div className="container-fluid movie-app">
        <div class="row">
          {movies?.length
            ? movies.map((movie) => (
                <>
                  <img src={movie.Poster} alt="" />
                </>
              ))
            : <h3 className="empty">No Movie Searched...</h3>}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
