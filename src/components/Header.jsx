import React from "react";
import { IoMdSearch } from "react-icons/io";

const Header = ({getLanguage}) => {
  function handleLang(value) {
    getLanguage(value)
  }
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">Кино</div>
          <form className="header__search">
            <input
              type="text"
              className="search-input"
              placeholder="Фильмы, персоны, кинотеатры"
            />
            <button className="search-btn">
              <IoMdSearch />
            </button>
          </form>
          <select onChange={(e) => handleLang(e.target.value)} className="header__language">
            <option value="ru-RU">RU</option>
            <option value="en-US">EN</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
