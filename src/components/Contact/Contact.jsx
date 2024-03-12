import styles from "./Contact.module.css";
import Icon1 from "../../assets/contact/envelope-regular.svg";
import Icon2 from "../../assets/contact/linkedin.svg";
import Icon3 from "../../assets/contact/github.svg";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
      <a href="#Navbar">Back to top</a>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
         <img className={styles.icon} src={Icon1} alt="Email icon" />
          <a href="mailto:myemail@email.com"><p>jessicalujanc@gmail.com</p></a>
        </li>
        <li className={styles.link}>
          <img className={styles.icon}
            src={Icon2}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/jessicalujanciv/">linkedin.com/jessicalujanciv</a>
        </li>
        <li className={styles.link}>
          <img className={styles.icon} src={Icon3} alt="Github icon" />
          <a href="https://github.com/jessicalujanc">github.com/jessicalujanc</a>
        </li>
      </ul>
    </footer>
  );
};
