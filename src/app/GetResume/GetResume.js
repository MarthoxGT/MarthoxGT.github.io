import React from "react";
import { useTranslation } from "react-i18next";

const GetResume = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("personal.name")}</h1>
    </div>
  );
};

export default GetResume;
