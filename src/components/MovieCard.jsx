import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ movieData, genres }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Link
      style={{ textDecoration: "none", color: "#B5B5B5" }}
      to={`/${movieData.id}`}
    >
      <div className="movie">
        <div className="movie__image">
          <img src={imageUrl + movieData.poster_path} alt="" />
        </div>
        <h4 className="movie__title">{movieData.title}</h4>
        {movieData &&
          movieData.genre_ids.map((id, index) => {
            let genre = genres.find((genre) => genre.id == id);
            console.log(genre);
            return (
              <span className="movie__genres">
                {genre.name +
                  (index == movieData.genre_ids.length - 1 ? " " : ", ")}
              </span>
            );
          })}
      </div>
    </Link>
  );
}

export default MovieCard;
