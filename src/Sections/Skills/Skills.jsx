import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { useLanguage } from '../../common/LanguageContext';

function Skills() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">{t('skillsTitle')}</h1>
      
      {/* Frontend */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
      </div>
      
      <hr />
      
      {/* Backend - Specialty */}
      <h3 className={styles.specialtyTitle}>{t('specialtyTitle')}</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="JAVA" />
        <SkillList src={checkMarkIcon} skill="Spring Boot" />
        <SkillList src={checkMarkIcon} skill="JPA / Hibernate" />
        <SkillList src={checkMarkIcon} skill="Microservices" />
        <SkillList src={checkMarkIcon} skill="REST APIs" />
      </div>
      
      <hr />
      
      {/* Databases */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Redis" />
      </div>
      
      <hr />
      
      {/* Tools & Practices */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git/GitHub" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Maven/Gradle" />
        <SkillList src={checkMarkIcon} skill="Design Patterns" />
        <SkillList src={checkMarkIcon} skill="Agile/Scrum" />
      </div>
    </section>
  );
}

export default Skills;