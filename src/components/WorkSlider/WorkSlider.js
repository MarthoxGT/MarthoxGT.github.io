import React, { useEffect, useState } from "react";
import "./workSlider.css";

const WorkSlider = () => {
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
            <section>
              <h1>{project.name}</h1>
              <h2>{project.owner.login}</h2>
              <h3>{project.created_at}</h3>
              <h3>{project.updated_at}</h3>
              <p>{project.description}</p>
            </section>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default WorkSlider;
