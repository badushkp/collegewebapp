import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu_icon.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // For making the navbar color change while scrolling and reaches 100px.
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  // Clicking on the navbar in mobile view
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    // -------------------NavBar----------------
    // --if it scroll 100px to y axis--
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img className="logo" src={logo} />
      <ul
        className={`${sticky ? "dark-nav" : ""} ${
          mobileMenu ? "" : "hide-mobile-menu"
        }`}
      >
        <li>
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={0} // distance from the top.
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="programs"
            spy={true}
            smooth={true}
            offset={-260} // distance from the top.
            duration={500}
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-150} // distance from the top.
            duration={500}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            spy={true}
            smooth={true}
            offset={-260} // distance from the top.
            duration={500}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-260} // distance from the top.
            duration={500}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-260} // distance from the top.
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default NavBar;
