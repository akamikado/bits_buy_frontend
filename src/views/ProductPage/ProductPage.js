import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import Navbar from "../../components/navbar";
import classes from "./ProductPage.module.css";
//import Item from "../components/Item";
import FeatureCard2 from "../../components/Card2";
export function ProductPage() {
  const [product, setProduct] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen((prevIsNavbarOpen) => !prevIsNavbarOpen);
  };
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  const {productId} = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("Error fetching data:", error));
  },[productId]);

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

      {!isNavbarOpen && product && (
        <div className={classes.ProductContainer}>
          <FeatureCard2 
          productName={product.productName}
          description={product.description} 
          discount={product.discount}
          currentPrice={product.currentPrice}
          priceInfo={product.priceInfo} />
        </div>
        
      )}
    </div>
  );
}

export default ProductPage;