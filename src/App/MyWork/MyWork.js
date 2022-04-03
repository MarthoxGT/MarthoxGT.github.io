import React from "react";
import { useTranslation } from "react-i18next";

const MyWork = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <h1 className="text-6xl text-gray-50">{t("personal.name")}</h1>
    </div>
  );
};

export default MyWork;
