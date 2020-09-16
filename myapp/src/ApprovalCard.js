/** @format */

import React from "react";

const ApprovalCard = (props) => {
  console.log(props);
  return (
    <div className='ui container'>
      <div className='content'>Are you sure ?</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='Ui basic green button'> Approved</div>
          <div className='Ui basic red button'>Rejected</div>
        </div>
      </div>
    </div>
  );
};
export default ApprovalCard;
