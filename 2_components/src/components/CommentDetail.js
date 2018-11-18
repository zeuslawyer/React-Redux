import React from "react";

const CommentDetail = props => {
  return (
      <div className="comment">
        <a href="#" className="avatar">
          <img alt="avatar" src={props.imageURL} />
        </a>
        <div className="content">
          <a href="#"> {props.author || "Anon"} </a>
          <div className="metadata">
            <span className="date">
              {props.date} at {props.time}
            </span>
          </div>
          <div className="text">{props.content}</div>
        </div>
      </div>
  );
};

export default CommentDetail;
