import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  let en = "en-US";
  let ru = "ru-RU";
  let [data, setData] = useState("");
  let [genres, setGenres] = useState([]);
  let lang = en;

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
  console.log(data);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MovieSection data={data} genres={genres} />}
        />
        <Route path=":id" element={<About data={data} />} />
      </Routes>
    </div>
  );
};

export default App;
