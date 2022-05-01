import React, { useLayoutEffect, useState } from "react";

const WorkSlider = () => {
  const [projects, setProjects] = useState([]);

  const { githubAPI } = require("../../assets/constants/urls.json");

  const getProjects = () => {
    console.log(projects);
    fetch(githubAPI.getRepos)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  };

  useLayoutEffect(() => {
    getProjects();
  }, []);

  return (
    <nav>
      {projects?.map((project) => (
        <div
          key={project.id}
          // onClick={() => (window.location.href = project.html_url)}
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
      ))}
    </nav>
  );
};

export default WorkSlider;
