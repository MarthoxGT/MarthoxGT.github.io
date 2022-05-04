import React from "react";
import { useTranslation } from "react-i18next";
import WorkSlider from "../../components/WorkSlider/WorkSlider";

import "./myWork.css";

const MyWork = () => {
  const { t } = useTranslation();

  return (
    <div className="myWork">
      <WorkSlider />
    </div>
  );
};

export default MyWork;
