import React from "react";
import classes from "./Item.module.css";


function Item(props) {
  return (
    <div className={classes["card"]}>
      <h2 className={classes["card-h2"]}>{props.title}</h2>
      <div className="actions">
        <button className={classes["card-btn"]}>Delete</button>
      </div>
    </div>
  );
}

export default Item;
