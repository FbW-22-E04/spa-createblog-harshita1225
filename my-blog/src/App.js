import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Showpost from "./components/Showpost";
import SinglePage from "./components/SinglePage";
import Createpost from "./components/Createpost";
import { useState } from "react";
function App() {
  const [showPost, setShowPost] = useState([]);
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/createpost"
            element={
              <Createpost showPost={showPost} setShowPost={setShowPost} />
            }
          />
          <Route path="/showpost" element={<Showpost showPost={showPost} />} />
          <Route
            path="/showpost/:singlepost"
            element={<SinglePage showPost={showPost} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
