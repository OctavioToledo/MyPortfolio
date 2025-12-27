import React from "react";
import styles from "./HeroStyles.module.css";
import userImg from "../../assets/Yoedit2.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import translateLight from '../../assets/translate-light.svg';
import translateDark from '../../assets/translate-dark.svg';
import CV from "../../assets/OcToledoResume.pdf";
import { useTheme } from "../../common/ThemeContext";
import { useLanguage } from "../../common/LanguageContext";

export const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const translateIcon = theme === "light" ? translateLight : translateDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={userImg}
          alt="Profile picture of Octavio Toledo"
        />
        <div className={styles.toggleContainer}>
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color Mode Icon"
            onClick={toggleTheme}
          />
          <img
            className={styles.langToggle}
            src={translateIcon}
            alt="Language Toggle"
            onClick={toggleLanguage}
            title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
          />
        </div>
      </div>
      <div className={styles.info}>
        <h1>
          Octavio <br /> Toledo
        </h1>
        <h2>{t('role')}</h2>
        <div className={styles.socialIcons}>
          <span>
            <a href="https://www.linkedin.com/in/octavio-toledo7/" target="_blank">
              <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
          </span>
          <span>
            <a href="https://github.com/OctavioToledo" target="_blank">
              <img src={githubIcon} alt="Github Icon" />
            </a>
          </span>
        </div>
        <p className={styles.description}> 
        {t('slogan')}
        </p>
        <a href={CV} download>
          <button className="hover">{t('downloadCV')}</button>
        </a>
      </div>
    </section>
  );
};
