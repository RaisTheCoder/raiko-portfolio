import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
  ];

  return (
    <header>
      <Link id="logo" to={"/"}>
        <img src="/favicon.ico" alt="" className="icon" />
        <h3>RAI&lt;O</h3>
      </Link>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={
                  location.pathname === link.to ? "link active" : "link"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="pill" id="socials">
          <Link
            to={"https://www.linkedin.com/in/rais-f%C9%99tullayev-b9ba13245/"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          <Link to={"https://www.github.com/RaisTheCoder"} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>

          <Link to={"https://www.instagram.com/rai_ko007"} target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <Link to={"https://www.youtube.com/ScorAXE007"} target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
