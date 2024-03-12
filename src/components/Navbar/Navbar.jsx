import { useState } from "react";
import styles from "./Navbar.module.css";
import Img from "../../assets/nav/closeIcon.svg";
import Img1 from "../../assets/nav/menuIcon.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar} id="Navbar">
      <div><h1 className={styles.title} href="">
        Portfolio
      </h1>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? Img : Img1}
          alt="menu-btn"
          onClick={toggleMenu}
        />
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`} onClick={toggleMenu}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
