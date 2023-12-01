import { useState } from "react";
import Navbar from "../components/navbar";
import classes from "./ProductPage.module.css";
//import Item from "../components/Item";
import FeatureCard2 from "../components/Card2";
export function ProductPage() {
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
      {/* Navbar */}
      {isNavbarOpen && <Navbar isOpen={isNavbarOpen} />}

      {!isNavbarOpen && (
        <div className={classes.ProductContainer}>
          <FeatureCard2 
          productName="OnePlus" 
          description="It's a brand new phone" 
          discount="10% off" 
          currentPrice="$1000" 
          priceInfo="Biddin's up and runnin" />
        </div>
      )}
    </div>
  );
}

export default ProductPage;
