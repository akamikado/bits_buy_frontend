import React from "react";
import classes from "./Item.module.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className={classes["card-container"]}>
    <div className={classes["card"]}>
      <img src={props.imageUrl} alt={props.title} className={classes["card-img"]}/>
      
      <h2 className={classes["card-h2"]}>{props.title}</h2>
      
      <p className={classes["card-description"]}>{props.description}</p>
      <div className="actions">
        
        <button className={classes["card-btn"]}>Current Bid: {props.currentPrice}</button>
        
        {/*<Link to="/Chat">
        <button className={classes["card-btn2"]}>Chat</button>
        </Link>*/}
      </div>
    </div>
    </div>
  );
}

export default Item;
