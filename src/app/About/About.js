import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-20">
      <h1 className="text-6xl text-gray-50">{t("personal.name")}</h1>
    </div>
  );
};

export default About;
