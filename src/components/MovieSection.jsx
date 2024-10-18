import React from "react";
import MovieCard from "./MovieCard";

function MovieSection({ data, genres }) {
  return (
    <div className="movie-section">
      <div className="container">
        <div className="movie-section__inner">
          {data &&
            data.results.map((movieData, i) => {
              return (
                <MovieCard movieData={movieData} genres={genres} key={i} />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MovieSection;
