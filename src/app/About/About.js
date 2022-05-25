import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Loading from "../../components/Loading/Loading";

import "./About.css";

const About = () => {
  const { t } = useTranslation();
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    const { githubAPI } = require("../../assets/constants/urls.json");
    fetch(githubAPI.getGeneralInfo)
      .then((response) => response.json())
      .then((data) => setAvatarUrl(data.avatar_url));
  }, []);

  return (
    <div className="aboutMe">
      <section className="leftPanel">
        {avatarUrl ? (
          <img className="profilePhoto" src={avatarUrl} />
        ) : (
          <Loading />
        )}
        <section className="nameSection">
          <h1>{t("personal.name")}</h1>
          <h3>{t("personal.fullName")}</h3>
          <p>{t("general.description")}</p>
        </section>
      </section>
      <section className="rightPanel">
        <section className="info">
          <h2>{t("general.professionalInfo")}</h2>
          <br />
          <p>{t("content.professionalInfo")}</p>
        </section>
        <br />
        <br />
        <section className="info">
          <h2>{t("general.personalInfo")}</h2>
          <br />
          <p>{t("content.personalInfo")}</p>
        </section>
      </section>
    </div>
  );
};

export default About;
