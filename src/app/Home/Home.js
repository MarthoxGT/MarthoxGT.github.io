import React from "react";
import { useTranslation } from "react-i18next";

import ContentSlider from "../../components/ContentSlider/ContentSlider";
import SocialPanel from "../../components/SocialPanel/SocialPanel";
import Footer from "../../components/Footer/Footer";

import "./home.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h1>{t("personal.name")}</h1>
      <SocialPanel />
      <ContentSlider />
      <Footer />
    </div>
  );
};

export default Home;
