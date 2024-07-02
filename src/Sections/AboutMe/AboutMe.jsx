import React from "react";
import styles from "./AboutMeStyles.module.css";
import { useTheme } from "../../common/ThemeContext";

const AboutMe = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">About Me</h1>
      <p className={styles.description}>
        Hello! ✋ I'm Octavio, 23 years old, and I'm passionate about the world
        of technology. 👨‍💻 With 2 years of experience as a Software developer,
        I graduated as a University Technician in Programming. I thrive on
        solving complex problems and embracing new challenges in software
        development, especially within collaborative team environments. My
        journey in programming has been driven by a strong curiosity and a
        continuous desire to learn and innovate.
      </p>
    </section>
  );
};

export default AboutMe;
