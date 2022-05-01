import React from "react";
import { useTranslation } from "react-i18next";

import ContentSlider from "../../components/ContentSlider/ContentSlider";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("personal.name")}</h1>
      <ContentSlider />
    </div>
  );
};

export default Home;
