import styles from './ProjectsStyles.module.css';
import proImg from '../../assets/proimg.jpg';
import buenSaborImg from '../../assets/foodimg.jpg';
import panteraImg from '../../assets/wasdimg.jpg';
import githubIcon from '../../assets/github-dark.svg';
import deployIcon from '../../assets/website.png';
import ProjectCard from '../../common/ProjectCard';
import { useLanguage } from '../../common/LanguageContext';

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">{t('projectsTitle')}</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={buenSaborImg}
          githubLink="https://github.com/Powip"
          deployLink="https://frontend-murex-eight-18.vercel.app/login"
          h3={t('powipTitle')}
          p={t('powipDesc')}
          githubIcon={githubIcon}
          deployIcon={deployIcon}
        />
        <ProjectCard
          src={proImg}
          githubLink=""
          deployLink="https://progestion.vercel.app/"
          h3={t('progestionTitle')}
          p={t('progestionDesc')}
          githubIcon={githubIcon}
          deployIcon={deployIcon}
        />
        <ProjectCard
          src={panteraImg}
          githubLink="https://github.com/OctavioToledo/proyectoLab4-Backend"
          deployLink="https://github.com/OctavioToledo/proyectoLab4-Front"
          h3={t('panteraTitle')}
          p={t('panteraDesc')}
          githubIcon={githubIcon}
          deployIcon={deployIcon}
        />
      </div>
    </section>
  );
}

export default Projects;
