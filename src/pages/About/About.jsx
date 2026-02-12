import React from "react";
import "./About.css";

const About = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Azerbaijani", level: "Native" },
    { name: "Turkish", level: "Intermediate" },
    { name: "Russian", level: "Beginner" },
  ];

  return (
    <section id="about">
      <div className="heading">
        <h1>About Me</h1>
        <p>
          I'm Rais, you can call me Raiko. a full-stack developer focused on
          building clean and practical web applications. I enjoy backend logic,
          database design and turning ideas into real working systems.
        </p>
      </div>

      <table id="languages">
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
    </section>
  );
};

export default About;
