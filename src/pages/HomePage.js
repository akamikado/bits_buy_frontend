import { useState,useEffect } from "react";
import Navbar from "../components/navbar";
import classes from "./HomePage.module.css";
import Item from "../components/Item";


function HomePage(props) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isItemVisible, setIsItemVisible] = useState(true);
  const [products,setProducts] = useState([]);
  const toggleNavbar = () => {
    setIsNavbarOpen((prevIsNavbarOpen) => !prevIsNavbarOpen);
    setIsItemVisible(false);
  };
  const closeNavbar = () => {
    setIsNavbarOpen(false);
    setIsItemVisible(true);
  };
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=> response.json())
    .then((data)=>setProducts(data))
    .catch((error)=>console.log("Error fetching data:", error));
  },[])
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
      {isItemVisible && !isNavbarOpen && (
        <div className={classes['items-container']}>
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

export default HomePage;
