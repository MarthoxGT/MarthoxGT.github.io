import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../app/Home/Home";
import About from "../app/About/About";
import GetResume from "../app/GetResume/GetResume";
import MyWork from "../app/MyWork/MyWork";

const Router = () => {
  const { home, about, mywork, getresume } = require("./routes.json");

  return (
    <Routes>
      <Route path={home} element={<Home />} />
      <Route path={about} element={<About />} />
      <Route path={mywork} element={<MyWork />} />
      <Route path={getresume} element={<GetResume />} />
    </Routes>
  );
};
export default Router;
