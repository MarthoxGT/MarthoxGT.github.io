import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import routes from "../../router/routes.json";

const NavBar = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { routePrefix } = require("../../assets/constants/prefixes.json");

  const links = Object.entries(routes).map(([key, value]) => (
    <Link
      className={`flex w-40 justify-center text-2xl text-gray-50 ${
        value === pathname ? "disabled" : null
      }`}
      to={value}
    >
      {t(routePrefix + key)}
    </Link>
  ));
  return (
    <nav className="flex h-12 w-screen flex-row items-center justify-center">
      {links.map((link) => link)}
    </nav>
  );
};

export default NavBar;
