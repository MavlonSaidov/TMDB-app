import React from "react";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
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
          <div className="header__language">
            <span>RU</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
