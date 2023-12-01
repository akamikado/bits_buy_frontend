import { FeatureCard } from "../../components/Card";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import classes from "./Sell.module.css";
import { Link } from "react-router-dom";
import Item from "../../components/Item";

function Sell() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [products,setProducts] = useState(null);
  const email=''
  useEffect(()=>{
    const response = async()=>{
      const productResponse = await fetch(`localhost:8080/sell/{email}`);
      const product= await productResponse.json();
      setProducts(product.productDetails);

    }
    response();
  },[])
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
        <Link to="/admin/sell/add">
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
          {products.map((product)=>(
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

export default Sell;

