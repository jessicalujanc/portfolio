import Img2 from "./Img2.jpg";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I’m Jessica</h1>
        <p className={styles.description}>
          I’m a web designer, fullstack MERN developer and psychologist.
          Reach out if you’d like to know more!
        </p>
        <a href="mailto:jessicalujan@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={Img2} className={styles.heroImg}></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
