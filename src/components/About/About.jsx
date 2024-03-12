import ImgCursor from "../../assets/about/arrow-pointer-solid.svg";
import ImgAbout from "../../assets/about/aboutImg.svg";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div>
          <img src={ImgAbout} alt="ImgAbout" className={styles.imgAbout} />
        </div>
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <div className={styles.ItemText}>
              <img src={ImgCursor} className={styles.cursor}></img>
              <h3>UX/UI Design</h3>
              <p>
                UX research and brenchmarketing.
                Prototipes building with Figma. 
                Background in psichology as a plus to optimize app´s functionality and
                usability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.ItemText}>
              <img src={ImgCursor} className={styles.cursor}></img>
              <h3>Frontend developer</h3>
              <p>
                Passionate about design and committed to creating responsive
                apps and aesthetic sites. Strong knowledge of CSS and ReactJs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.ItemText}>
              <img src={ImgCursor} className={styles.cursor}></img>
              <h3>Backend developer</h3>
              <p>
                Fast, streamlined application development with Node and Express.
                Database Integration & API Rest.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
