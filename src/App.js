import React from "react";
import Router from "./router/Router";
import NavBar from "./components/Navbar/Navbar";
import "./i18n";

const App = () => (
  <>
    <NavBar />
    <Router />
  </>
);

export default App;
