import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SinglePage = (props) => {
  const { singlepost } = useParams();
  const navigate = useNavigate();

  const result = props.showPost.filter((item) => item.title === singlepost)[0];

  return (
    <div>
      <p>{result && result.content}</p>
      <button onClick={() => navigate("/createpost")}>Back</button>
    </div>
  );
};

export default SinglePage;
