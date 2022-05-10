import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Temporal } from "@js-temporal/polyfill";
import "./workSlider.css";

const WorkSlider = ({ searchQuery }) => {
  const { t } = useTranslation();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const { githubAPI } = require("../../assets/constants/urls.json");

    fetch(githubAPI.getRepos)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <nav className="workCarrousel">
      {projects
        ?.filter((project) => project.name.includes(searchQuery))
        .map((project) => (
          <div className="workCard" key={project.id}>
            <section
              className="cardContent"
              onClick={() => (window.location.href = project.html_url)}
            >
              <h1>{project.name}</h1>
              <h2>{project.owner.login}</h2>
              <div className="cardSeparator" />
              <div className="cardElement">
                <h3>{t("myWork.createdAt")}</h3>
                <p>
                  {Temporal.Instant.from(project.created_at)
                    .until(Temporal.Now.instant())
                    .round("days")
                    .total("days")}{" "}
                  {t("myWork.daysAgo")} (
                  {Temporal.Instant.from(project.created_at)
                    .toString()
                    .split("T")
                    .at(0)}
                  )
                </p>
              </div>
              <div className="cardElement">
                <h3>{t("myWork.updatedAt")}</h3>
                <p>
                  {Temporal.Instant.from(project.updated_at)
                    .until(Temporal.Now.instant())
                    .round("days")
                    .total("days")}{" "}
                  {t("myWork.daysAgo")} (
                  {Temporal.Instant.from(project.updated_at)
                    .toString()
                    .split("T")
                    .at(0)}
                  )
                </p>
              </div>
              <div className="cardElement">
                <h3>{t("myWork.description")}</h3>
                <p>{project.description || t("myWork.noDescription")}</p>
              </div>
            </section>
          </div>
        ))}
    </nav>
  );
};

export default WorkSlider;
