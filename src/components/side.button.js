import React from "react";

import {FaAddressBook} from 'react-icons/fa';


function SideButton(props) {
  return (
    <div className={`x-side-button ${props.active?'active':''}`} onClick={props.onClick}>
      <FaAddressBook></FaAddressBook>
      <span>{props.title}</span>
    </div>
  );
}

export default SideButton;
