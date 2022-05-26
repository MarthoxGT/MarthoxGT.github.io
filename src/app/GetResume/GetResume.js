import React from "react";
import { useTranslation } from "react-i18next";

import "./getResume.css";

const GetResume = () => {
  const { t } = useTranslation();

  return (
    <div className="getResume">
      <a href="https://docs.google.com/document/u/0/export?format=pdf&id=18tuza4zoHAOmgQZAM5UrK3OJmXDJHeVqCgDKWt_EKS4&token=AC4w5Vivo6HMFsMyvLdHV1GwNs1bTEw4wQ%3A1653489178633&includes_info_params=true&usp=sharing&inspectorResult=%7B%22pc%22%3A3%2C%22lplc%22%3A14%7D">
        <h3>{t("general.downloadPDF")}</h3>
      </a>
    </div>
  );
};

export default GetResume;
