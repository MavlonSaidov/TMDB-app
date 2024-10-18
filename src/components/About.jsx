import React from "react";
import { useParams } from "react-router-dom";

function About({ data }) {
  const { id } = useParams();
  const thatMovie = data && data.results.find((item) => item.id == id);
  console.log("hey", thatMovie);
  const imageUrl = "https://image.tmdb.org/t/p/w300";
  return (
    <div className="about">
      <div className="container">
        <div className="about__inner">
          <img src={imageUrl + thatMovie.poster_path} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
