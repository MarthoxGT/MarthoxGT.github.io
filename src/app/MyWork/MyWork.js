import React from "react";
import { useTranslation } from "react-i18next";
import WorkSlider from "../../components/WorkSlider/WorkSlider";
import SearchBar from "../../components/SearchBar/SearchBar";

import "./myWork.css";

const MyWork = () => {
  return (
    <div className="myWork">
      <SearchBar />
      <WorkSlider />
    </div>
  );
};

export default MyWork;
