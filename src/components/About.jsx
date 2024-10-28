import React, { useEffect, useState } from "react";
import { GiCharacter } from "react-icons/gi";
import { useParams } from "react-router-dom";

function About({ data, genres, lang }) {
  const { id } = useParams();
  let [cast, setCast] = useState("");
  const movie = data.results.find((item) => item.id == id);
  console.log(cast);
  const imageUrl = "https://image.tmdb.org/t/p/w300";
  console.log(cast)
  useEffect(() => {
    fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=245e10fb2b807cec9c8e3963076dcd10&language=${lang}`
    )
      .then((res) => res.json())
      .then((data) => setCast(data));
  }, [lang]);
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
              <div className="about__cast">
                {cast &&
                  cast.cast.map((item) => {
                    return (
                      <div className="cast">
                        <div className="cast__image">
                          {item.profile_path ? <img src={imageUrl + item.profile_path} /> : <GiCharacter fontSize={110} color="black"/>}
                        </div>
                        <h5>{item.name}</h5>
                        <span>{item.character}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
