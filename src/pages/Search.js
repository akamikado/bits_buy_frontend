import SearchBar from "../components/SearchBar";
import React from "react";
import classes from "./Search.module.css";
import { useState } from "react";
import Navbar from "../components/navbar";
function Search() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen((prevIsNavbarOpen) => !prevIsNavbarOpen);
  };
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };
  return (
    <div className={classes["home-page-container"]}>
      {!isNavbarOpen && (
        <button onClick={toggleNavbar} className={classes["nav-button"]}>
          &#9776;
        </button>
      )}
      {isNavbarOpen && (
        <div className={classes["overlay"]} onClick={closeNavbar}></div>
      )}

      {isNavbarOpen && <Navbar isOpen={isNavbarOpen} />}
      {!isNavbarOpen && (
        <div className={classes["search-container"]}>
          <SearchBar className={classes["search-bar"]} />
          <h1>Search</h1>
        </div>
      )}
    </div>
  );
}
export default Search;
