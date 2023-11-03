import "./category-box.css";
import React from "react";
// import Action from "../assets/Action.png";

export default function CategoryBox({ categoryname, img, color }) {
  return (
    <div className="container-box" style={{ backgroundColor: `${color}` }}>
      <h3>{categoryname}</h3>
      <img src={img} alt="a" width={150} height={65} />
    </div>
  );
}
