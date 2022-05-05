import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./workSlider.css";

const WorkSlider = () => {
  const { t } = useTranslation();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const { githubAPI } = require("../../assets/constants/urls.json");

    fetch(githubAPI.getRepos)
      .then((response) => response.json())
      .then((data) => setProjects(data));
    const incrementSliderInterval = setInterval(() => {}, 3000);

    return () => clearInterval(incrementSliderInterval);
  }, []);

  return (
    <nav className="workCarrousel">
      {projects?.map((project) => (
        <div className="workCard" key={project.id}>
          <div
            className="cardContent"
            onClick={() => (window.location.href = project.html_url)}
          >
            <img src={project.owner.avatar_url} />
            <section className="cardSection">
              <h1>{project.name}</h1>
              <h2>{project.owner.login}</h2>
              <div className="cardElement">
                <h3>{t("myWork.createdAt")}</h3>
                <p>{project.created_at}</p>
              </div>
              <div className="cardElement">
                <h3>{t("myWork.updatedAt")}</h3>
                <p>{project.updated_at}</p>
              </div>
              <div className="cardElement">
                <h3>{t("myWork.description")}</h3>
                <p>{project.description || t("myWork.no_description")}</p>
              </div>
            </section>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default WorkSlider;
