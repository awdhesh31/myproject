/** @format */

import React from "react";

const Spiner = (props) => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big next loader'> {props.message}</div>
    </div>
  );
};
export default Spiner;
