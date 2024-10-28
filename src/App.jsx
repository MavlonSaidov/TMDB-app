import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  let [data, setData] = useState("");
  let [genres, setGenres] = useState([]);

  let [lang, setLang] = useState('ru-RU')

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=245e10fb2b807cec9c8e3963076dcd10&language=${lang}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));

    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=245e10fb2b807cec9c8e3963076dcd10&language=${lang}`
    )
      .then((res) => res.json())
      .then((data) => setGenres(data.genres));
    
  }, [lang]);

  function getLanguage(lang) {
    setLang(lang)
  }

  return (
    <div className="app">
      <Header getLanguage={getLanguage} />
      <Routes>
        <Route
          path="/"
          element={<MovieSection data={data} genres={genres} />}
        />
        <Route path=":id" element={data && genres ? <About data={data} lang={lang} genres={genres} /> : 'loading'} />
      </Routes>
    </div>
  );
};

export default App;
