import history from "../../data/history.json";
import styles from "./Experience.module.css";
import Img1 from "../../assets/skills/html.png";
import Img2 from "../../assets/skills/css.png";
import Img3 from "../../assets/skills/react.png";
import Img4 from "../../assets/skills/node.png";
import Img5 from "../../assets/skills/mongodb.png";
import Img6 from "../../assets/skills/figma.png";
import Img7 from "../../assets/skills/mysql.svg";
import Img8 from "../../assets/skills/git-icon.svg";
import Img9 from "../../assets/skills/postman-icon.svg";
import Img10 from "../../assets/skills/photoshop.svg";
import Img11 from "../../assets/skills/adobe-illustrator.svg";


export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={Img1}></img>{" "}
            </div>
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={Img2}></img>{" "}
            </div>
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={Img3}></img>{" "}
            </div>
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={Img4}></img>{" "}
            </div>
            <p>NodeJS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={Img5}></img>{" "}
            </div>
            <p>MongoDB</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={Img7}></img>{" "}
            </div>
            <p>MySQL</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={Img8}></img>{" "}
            </div>
            <p>GIT</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={Img9}></img>{" "}
            </div>
            <p>Postman</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={Img6}></img>{" "}
            </div>
            <p>Figma</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={Img10}></img>{" "}
            </div>
            <p>Photoshop</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={Img11}></img>{" "}
            </div>
            <p>Ilustrator</p>
          </div>
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  {" "}
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
