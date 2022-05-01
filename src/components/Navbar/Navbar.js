import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import routes from "../../router/routes.json";

import "./navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { routePrefix } = require("../../assets/constants/prefixes.json");

  const links = Object.entries(routes).map(([key, value]) => (
    <Link key={key} to={value}>
      {t(routePrefix + key)}
    </Link>
  ));

  return <nav className="navbar">{links.map((link) => link)}</nav>;
};

export default Navbar;
