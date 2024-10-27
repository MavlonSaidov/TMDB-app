import React from "react";
import { useParams } from "react-router-dom";

function About({ data, genres, cast }) {
  const { id } = useParams();
  const movie = data.results.find((item) => item.id == id);
  console.log(cast);
  const imageUrl = "https://image.tmdb.org/t/p/w300";
  return (
    <div className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__main">
            <div className="about__image">
              <img src={imageUrl + movie.poster_path} alt="" />
            </div>
            <div className="about__content">
              <span>Название:</span>
              <h2>{movie.title}</h2>
              <span>Обзор:</span>
              <p>{movie.overview}</p>
              <span>Дата релиза:</span>
              <p>{movie.release_date}</p>
              <span>Бюджет:</span>
              <h4>1300000</h4>
              <span>Сборы:</span>
              <h4>12300000</h4>
              <span>Продолжительность:</span>
              <h4>1:42</h4>

              <div className="about__genres"></div>
            </div>
          </div>
          <div className="about__cast">
            {
              cast.cast.map(item => {
                return <img src={imageUrl + item.profile_path}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
