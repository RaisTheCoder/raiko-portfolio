import React from "react";
import "./About.css";
import { Helmet } from "react-helmet";

const About = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Azerbaijani", level: "Native" },
    { name: "Turkish", level: "Intermediate" },
    { name: "Russian", level: "Beginner" },
  ];

  const skills = [
    { name: "Cooking" },
    { name: "Baking" },
    { name: "Logical Thinking" },
    { name: "Reasoning" },
    { name: "Diagnosing & Repairing Devices" },
  ];

  return (
    <>
      <Helmet>
        <title>Raiko - About Me</title>
      </Helmet>
      <section id="about">
        <div className="heading flex flex-col justify-center items-center w-full md:w-auto">
          <h1 className="text-[40px] lg:text-[65px]">About Me</h1>
          <p>
            I'm Rais, you can call me Raiko. a full-stack developer focused on
            building clean and practical web applications. I enjoy backend
            logic, database design and turning ideas into real working systems.
          </p>
        </div>

        <div id="skill-sect">
          <table class="table">
            <thead>
              <tr>
                <td>Language</td>
                <td>Level</td>
              </tr>
            </thead>
            <tbody>
              {languages.map((language) => {
                return (
                  <tr key={language.name}>
                    <td>{language.name}</td>
                    <td>{language.level}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table class="table">
            <thead>
              <tr>
                <td>Skills</td>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill) => {
                return (
                  <tr key={skill.name}>
                    <td>{skill.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default About;
