/** @format */

import React from "react";

const CommentDetails = (props) => {
  return (
    <div className='comments'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.avatar} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>{props.timeAgo}</span>
        </div>
        <div className='text'>{props.blog}</div>
      </div>
    </div>
  );
};
export default CommentDetails;
