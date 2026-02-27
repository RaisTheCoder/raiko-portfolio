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
  const [navV, setNavV] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  document.documentElement.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    console.log(scrolled);
  });

  return (
    <header
      className={`flex h-12.5 md:h-25 px-10 py-10 gap-10 justify-between fixed top-0 left-0 durataion-300`}
    >
      <Link id="logo" to={"/"} className="h-12.5 lg:h-18.75">
        <img src="/favicon.ico" alt="" className="icon" />
        <h3 className="text-[30px] lg:text-[40px] text-bold -tracking-[2px]">
          RAI&lt;O
        </h3>
      </Link>
      <nav className={`hidden lg:flex`}>
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

        <div className="relative flex flex-col">
          <button
            className="lg:hidden rounded-[50%] h-12.5 w-12.5 bg-(--raiko-default) hover:text-white duration-200"
            onClick={() => setNavV(!navV)}
          >
            <FontAwesomeIcon className="pointer-events-none" icon={faBars} />
          </button>
          <ul
            className={`border-gray-600 border absolute right-[5%] top-[120%] bg-white items-center flex flex-col text-black p-3 gap-2 rounded-4xl ${navV ? "pointer-events-auto" : "pointer-events-none"} ${navV ? "opacity-100" : "opacity-0"} duration-200 lg:hidden`}
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={
                    location.pathname === link.to ? "link active" : "link"
                  }
                  onClick={() => setNavV(!navV)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <div className="pill" id="socials">
                <Link
                  to={
                    "https://www.linkedin.com/in/rais-f%C9%99tullayev-b9ba13245/"
                  }
                  target="_blank"
                  onClick={() => setNavV(!navV)}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>

                <Link
                  to={"https://www.github.com/RaisTheCoder"}
                  target="_blank"
                  onClick={() => setNavV(!navV)}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>

                <Link
                  to={"https://www.instagram.com/rai_ko007"}
                  target="_blank"
                  onClick={() => setNavV(!navV)}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>

                <Link
                  to={"https://www.youtube.com/ScorAXE007"}
                  target="_blank"
                  onClick={() => setNavV(!navV)}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
