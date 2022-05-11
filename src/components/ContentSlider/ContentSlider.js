import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import routes from "../../router/routes.json";

import "./contentSlider.css";

const ContentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { routePrefix } = require("../../assets/constants/prefixes.json");

  const slides = Object.entries(routes)
    .filter(([_key, value]) => value !== pathname)
    .map(([key, value]) => (
      <Link className="linkToContent" to={value}>
        <h3>{t(routePrefix + key)}</h3>
      </Link>
    ));

  const incrementSlide = () =>
    setCurrentSlide((prevSlide) =>
      prevSlide + 1 > slides.length - 1 ? 0 : prevSlide + 1
    );

  const decrementSlide = () =>
    setCurrentSlide((prevSlide) =>
      prevSlide - 1 < 0 ? slides.length - 1 : prevSlide - 1
    );

  useEffect(() => {
    const incrementSliderInterval = setInterval(() => incrementSlide(), 3000);

    return () => clearInterval(incrementSliderInterval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <nav className="contentSlider">
      <button className="contentSliderButton" onClick={decrementSlide}>
        {"<"}
      </button>
      {slides[currentSlide]}
      <button className="contentSliderButton" onClick={incrementSlide}>
        {"/>"}
      </button>
    </nav>
  );
};

export default ContentSlider;
