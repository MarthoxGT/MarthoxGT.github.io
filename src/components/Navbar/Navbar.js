import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import routes from "../../router/routes.json";

import "./navbar.css";

const Navbar = () => {
  const { t } = useTranslation();
  const { routePrefix } = require("../../assets/constants/prefixes.json");

  const getLinks = () =>
    Object.entries(routes).map(([key, value]) => (
      <Link key={key} to={value}>
        {t(routePrefix + key)}
      </Link>
    ));

  return <nav className="navbar">{getLinks()}</nav>;
};

export default Navbar;
