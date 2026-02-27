import React from "react";
import "./Home.css";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Raiko - Home</title>
      </Helmet>
      <section id="home">
        <aside className="heading">
          <h1 className="text-[40px] lg:text-[65px]">
            Welcome to my page, this is RAI&lt;O
          </h1>
          <p>
            I'm a person that's all about learning new stuff and being
            productive.
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
    </>
  );
};

export default Home;
