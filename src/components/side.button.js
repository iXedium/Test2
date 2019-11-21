import React from "react";


function SideButton(props) {
  return (
    <div
      className={`x-side-button ${props.active ? "active" : ""}`}
      onClick={props.onClick}
    >
      <img src={props.imageSource} alt={props.title}></img>
      <span>{props.title}</span>
    </div>
  );
}

export default SideButton;
