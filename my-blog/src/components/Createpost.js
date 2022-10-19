import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createpost = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    author: "",
    title: "",
    content: "",
    date: undefined,
  });

  const submitHandler = () => {
    props.setShowPost([...props.showPost, state]);
    navigate("/showpost");
    //console.log(state);
  };

  const changeHandler = (e) => {
    setState({
      ...state,
      date: new Date().toISOString(),
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="create-post">
      <form onSubmit={submitHandler}>
        <label htmlFor="author">
          Author
          <input onChange={changeHandler} id="author" type="text" />
        </label>
        <label htmlFor="Title">
          Title
          <input onChange={changeHandler} id="title" type="text" />
        </label>
        <label htmlFor="Content">
          Content
          <textarea
            onChange={changeHandler}
            name="textarea"
            id="content"
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <button type="submit">Create a Post</button>
      </form>
    </div>
  );
};

export default Createpost;
