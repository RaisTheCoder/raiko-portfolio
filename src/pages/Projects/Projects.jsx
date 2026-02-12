import React, { useEffect } from "react";
import "./Projects.css";
import { Link } from "react-router";

const Projects = () => {
  const [projects, setProjects] = React.useState([]);

  const [count, setCount] = React.useState(0);

  async function retrieveProjects() {
    let res = await fetch("https://api.github.com/users/RaisTheCoder/repos");
    let data = await res.json();
    return data;
  }

  useEffect(() => {
    const cached = localStorage.getItem("projects");
    const cacheTime = localStorage.getItem("projects_time");

    if (cached && cacheTime && Date.now() - cacheTime < 1000 * 60 * 60) {
      setProjects(JSON.parse(cached));
      return;
    }

    async function fetchData() {
      const data = await retrieveProjects();
      setProjects(data);
      localStorage.setItem("projects", JSON.stringify(data));
      localStorage.setItem("projects_time", Date.now());
    }

    // console.log(retrieveProjects()); // It was for debugging purpose
    fetchData();
  }, []);

  return (
    <section id="projects">
      {projects.map((project) => {
        var fixedName = project.name.replaceAll("-", " ").replaceAll("_", " ");
        return (
          <article key={project.id} className="project">
            <strong className="name">
              <Link to={project.html_url} target="_blank">
                {fixedName}
              </Link>
            </strong>
            <p className="description">{project.description}</p>

            {/* <button onClick={() => setCount(count + 1)}>
              Had to do this for homework {count}
            </button> */}
          </article>
        );
      })}
    </section>
  );
};

export default Projects;
