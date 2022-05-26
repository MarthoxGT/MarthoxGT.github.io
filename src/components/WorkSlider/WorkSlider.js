import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Temporal } from "@js-temporal/polyfill";

import Loading from "../Loading/Loading";

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
      {projects.length ? (
        projects
          ?.filter(({ name }) =>
            name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(
            ({
              id,
              html_url,
              name,
              owner,
              created_at,
              updated_at,
              description,
            }) => (
              <div className="workCard" key={id}>
                <section
                  className="cardContent"
                  onClick={() => window.open(html_url, "_blank").focus()}
                >
                  <h2 className="projectTitle">{name}</h2>
                  <h3 className="projectOwner">{owner.login}</h3>
                  <div className="cardSeparator" />
                  <div className="cardElement">
                    <h4 className="cardElementLabel">
                      {t("myWork.createdAt")}
                    </h4>
                    <p className="cardElementDate">
                      {Temporal.Instant.from(created_at)
                        .until(Temporal.Now.instant())
                        .round("days")
                        .total("days")}{" "}
                      {t("myWork.daysAgo")} (
                      {Temporal.Instant.from(created_at)
                        .toString()
                        .split("T")
                        .at(0)}
                      )
                    </p>
                  </div>
                  <div className="cardElement">
                    <h4 className="cardElementLabel">
                      {t("myWork.updatedAt")}
                    </h4>
                    <p className="cardElementDate">
                      {Temporal.Instant.from(updated_at)
                        .until(Temporal.Now.instant())
                        .round("days")
                        .total("days")}{" "}
                      {t("myWork.daysAgo")} (
                      {Temporal.Instant.from(updated_at)
                        .toString()
                        .split("T")
                        .at(0)}
                      )
                    </p>
                  </div>
                  <div className="cardElement">
                    <h4 className="cardElementLabel">
                      {t("myWork.description")}
                    </h4>
                    <p className="cardElementDescription">
                      {description || t("myWork.noDescription")}
                    </p>
                  </div>
                </section>
              </div>
            )
          )
      ) : (
        <Loading />
      )}
    </nav>
  );
};

export default WorkSlider;
