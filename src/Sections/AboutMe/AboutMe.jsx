import React from "react";
import styles from "./AboutMeStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import { useLanguage } from "../../common/LanguageContext";

const AboutMe = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">{t('aboutTitle')}</h1>
      <p className={styles.description}>
        {t('aboutText')}
      </p>
    </section>
  );
};

export default AboutMe;
