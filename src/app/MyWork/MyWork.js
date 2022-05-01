import React from "react";
import { useTranslation } from "react-i18next";
import WorkSlider from "../../components/WorkSlider/WorkSlider";

const MyWork = () => {
  const { t } = useTranslation();

  return (
    <div>
      <WorkSlider />
    </div>
  );
};

export default MyWork;
