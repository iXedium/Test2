import React from "react";

const Backdrop = props =>
  props.show ? (
    <div className='x-backdrop' onClick={props.clicked}></div>
  ) : null;

export default Backdrop;
