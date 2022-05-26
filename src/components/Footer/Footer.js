import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return <div className="footer">{t("general.footerMessage")}</div>;
};

export default Footer;
