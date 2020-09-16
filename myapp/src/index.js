/** @format */

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className='Ui contener comments'>
      <ApprovalCard>
        <CommentDetails
          author='sam'
          timeAgo='Today at 2:00 am'
          blog='Such a inteligent guy'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetails
        author='alex'
        timeAgo='Yesterday at 4:45 pm'
        blog='Amazing Singer'
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author='jerry'
        timeAgo='Tommorow at 12:00 pm'
        blog='Superb Model'
        avatar={faker.image.avatar()}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
