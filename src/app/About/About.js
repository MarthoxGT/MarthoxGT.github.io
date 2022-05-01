import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section>
        <div>
          Profile photo
          {/* Change div, to img tag on new src */}
        </div>
        <p>{t("general.description")}</p>
      </section>
      <section>
        <section>
          <h1>{t("personal.name")}</h1>
          <h2>{t("personal.fullName")}</h2>
        </section>
        <section>
          <h2>{t("general.personalInfo")}</h2>
          <p>{t("content.personalInfo")}</p>
        </section>

        <section>
          <h2>{t("general.professionalInfo")}</h2>
          <p>{t("content.professionalInfo")}</p>
        </section>
      </section>
    </div>
  );
};

export default About;
