import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../App/Home/Home";
import About from "../App/About/About";
import GetResume from "../App/GetResume/GetResume";
import MyWork from "../App/MyWork/MyWork";

import routes from "./routes.json";

const Router = () => (
  <Routes>
    <Route path={routes.home} element={<Home />} />
    <Route path={routes.about} element={<About />} />
    <Route path={routes.mywork} element={<MyWork />} />
    <Route path={routes.getresume} element={<GetResume />} />
  </Routes>
);
export default Router;
