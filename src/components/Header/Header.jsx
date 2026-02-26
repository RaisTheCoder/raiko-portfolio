import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme);
  }, []);

  if (theme == "dark") {
    document.documentElement.classList.toggle("dark", true);
  } else {
    document.documentElement.classList.toggle("dark", false);
  }

  function changeTheme() {
    if (theme == "dark") {
      setTheme("light");
      document.documentElement.classList.toggle("dark", false);
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.toggle("dark", true);
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <header className="flex h-12.5 md:h-25 lg:px-12.5 gap-10 justify-between">
      <Link id="logo" to={"/"} className="h-12.5 lg:h-18.75">
        <img src="/favicon.ico" alt="" className="icon" />
        <h3 className="text-[30px] lg:text-[40px] text-bold -tracking-[2px]">
          RAI&lt;O
        </h3>
      </Link>
      <nav className="hidden lg:flex">
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
      <div className="buttons flex gap-2 ">
        <button
          className="rounded-[50%] h-12.5 w-12.5 bg-(--raiko-default) hover:text-white duration-200"
          onClick={changeTheme}
        >
          {theme == "dark" ? (
            <FontAwesomeIcon className="pointer-events-none" icon={faSun} />
          ) : (
            <FontAwesomeIcon className="pointer-events-none" icon={faMoon} />
          )}
        </button>
        <button className="lg:hidden rounded-[50%] h-12.5 w-12.5 bg-(--raiko-default) hover:text-white duration-200">
          <FontAwesomeIcon className="pointer-events-none" icon={faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
