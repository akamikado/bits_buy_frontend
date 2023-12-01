import SearchBar from "../components/SearchBar";
import React from "react";
import classes from "./Search.module.css";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Item from "../components/Item";
function Search() {
  const [isSearched, setIsSearched] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const[isItemVisible,setIsItemVisible] = useState(true);
  const[products,setProducts] = useState([]);

  const toggleNavbar = () => {
    setIsNavbarOpen((prevIsNavbarOpen) => !prevIsNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  const handleSearch = (searchResults) => {
    setIsSearched(false);
    setProducts(searchResults);
    setIsItemVisible(true);
    setIsNavbarOpen(false); // Close the navbar after searching
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, []);

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
          <SearchBar onSearch={handleSearch} className={classes["search-bar"]} />
          <h1>Search</h1>
        </div>
      )}
      {isItemVisible && !isNavbarOpen && isSearched && (
        <div className={classes['items-container']}>
          {products.map((product) => (
            <Item
              key={product.id}
              title={product.title}
              description={product.description}
              currentPrice={product.currentPrice}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Search;
