import { useState } from "react";
import Navbar from "../../components/navbar";
import classes from "./HomePage.module.css";
import Item from "../../components/Item";


function HomePage() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isItemVisible, setIsItemVisible] = useState(true);
  const toggleNavbar = () => {
    setIsNavbarOpen((prevIsNavbarOpen) => !prevIsNavbarOpen);
    setIsItemVisible(false);
  };
  const closeNavbar = () => {
    setIsNavbarOpen(false);
    setIsItemVisible(true);
  };
  return (
    <div className={classes["home-page-container"]}>
      {/* Navigation button */}
      {!isNavbarOpen && (
        <button onClick={toggleNavbar} className={classes["nav-button"]}>
          &#9776;
        </button>
      )}
      {isNavbarOpen && (
        <div className={classes["overlay"]} onClick={closeNavbar}></div>
      )}
      {/* Navbar */}
      {isNavbarOpen && <Navbar isOpen={isNavbarOpen} />}
      {/* Items */}
      {isItemVisible && !isNavbarOpen && (
        <div className={classes['items-container']}>
          <Item title="Item1"/>
          <Item title="Item2"/>
      
        </div>
      )}
    </div>
  );
}

export default HomePage;
