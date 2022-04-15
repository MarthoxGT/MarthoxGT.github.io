import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import routes from "../../router/routes.json";

const ContentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { routePrefix } = require("../../assets/constants/prefixes.json");

  const slides = Object.entries(routes)
    .filter(([_key, value]) => value !== pathname)
    .map(([key, value]) => (
      <Link
        className="flex w-40 justify-center text-2xl text-gray-50"
        to={value}
      >
        {t(routePrefix + key)}
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
    <nav className="flex gap-10">
      <button className="w-10 text-2xl text-gray-50" onClick={decrementSlide}>
        {"<"}
      </button>
      {slides[currentSlide]}
      <button className="w-10 text-2xl text-gray-50" onClick={incrementSlide}>
        {">"}
      </button>
    </nav>
  );
};

export default ContentSlider;
