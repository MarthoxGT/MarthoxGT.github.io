import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-8 flex h-5/6 w-full items-center justify-center gap-5">
      <section className="flex h-full w-1/4 flex-col items-center justify-center gap-20">
        <div className="text-gray-50">
          Profile photo
          {/* Change div, to img tag on new src */}
        </div>
        <p className="text-gray-50">{t("general.description")}</p>
      </section>
      <section className="flex h-4/5 w-3/4 flex-col items-center justify-center gap-20">
        <section className="flex flex-col gap-5">
          <h1 className="text-center text-6xl text-gray-50">
            {t("personal.name")}
          </h1>
          <h2 className="text-center text-3xl text-gray-50">
            {t("personal.fullName")}
          </h2>
        </section>
        <section className="flex h-1/2 w-4/5 flex-col gap-5">
          <h2 className="text-4xl text-gray-50">{t("general.personalInfo")}</h2>
          <p className="scrollbar h-5/6 w-full overflow-y-scroll text-2xl text-gray-50">
            {t("content.personalInfo")}
          </p>
        </section>

        <section className="flex h-1/2 w-4/5 flex-col gap-5">
          <h2 className="text-4xl text-gray-50">
            {t("general.professionalInfo")}
          </h2>
          <p className="scrollbar h-5/6  w-full overflow-y-scroll text-2xl text-gray-50">
            {t("content.professionalInfo")}
          </p>
        </section>
      </section>
    </div>
  );
};

export default About;
