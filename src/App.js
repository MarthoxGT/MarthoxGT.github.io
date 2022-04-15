import React from "react";
import Router from "./router/Router";
import NavBar from "./components/NavBar/NavBar";
import "./i18n";

const App = () => (
  <div className="flex h-screen w-screen flex-col bg-gradient-to-b from-gray-800 to-gray-900">
    <NavBar />
    <Router />;
  </div>
);

export default App;
