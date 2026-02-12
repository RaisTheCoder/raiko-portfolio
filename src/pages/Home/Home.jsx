import React from "react";
import "./Home.css";
import { Link } from "react-router";

const Home = () => {
  return (
    <section id="home">
      <aside className="heading">
        <h1>Welcome to my page, this is RAI&lt;O</h1>
        <p>
          I'm a person that's all about learning new stuff and being productive.
        </p>
      </aside>
      <article>
        <div className="buttons">
          <button className="pill">
            <Link to={"/projects"}>See More</Link>
          </button>
          <button className="pill">
            <Link to={"/about"}>About Me</Link>
          </button>
        </div>
      </article>
    </section>
  );
};

export default Home;
