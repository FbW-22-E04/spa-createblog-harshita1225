import React from "react";
import { Link } from "react-router-dom";

const Showpost = (props) => {
  console.log(props.showPost);
  return (
    <div className="show-post">
      <h2 className="show-post-heading">Good Morning Developers!! </h2>
      {props.showPost.map((item, idx) => {
        return (
          <div key={idx}>
            <Link to={`/showpost/${item.title}`}>
              {" "}
              {item.title} : read full article
            </Link>
            <h5>
              {item.author} wrote at :{item.date}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Showpost;
