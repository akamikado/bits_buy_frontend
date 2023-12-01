import { FeatureCard } from "../../components/Card";
import { useState } from "react";
import Navbar from "../../components/navbar";
import classes from "./Sell.module.css";
import { Link } from "react-router-dom";
function Sell() {
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
        <>
        <button onClick={toggleNavbar} className={classes["nav-button"]}>
          &#9776;
        </button>
        <Link to="/AddProduct">
        <button className={classes["plus-button"]}>+</button>
        </Link>
        </>
      )}
      {isNavbarOpen && (
        <div className={classes["overlay"]} onClick={closeNavbar}></div>
      )}
      {/* Navbar */}
      {isNavbarOpen && <Navbar isOpen={isNavbarOpen} />}
      {!isNavbarOpen && (
        <div>
          <h1>Sell</h1>
          <div>
            <FeatureCard productName="Lolla"/>
            <FeatureCard />
          </div>
        </div>
      )}
    </div>
  );
}

export default Sell;

