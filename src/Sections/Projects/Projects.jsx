import styles from './ProjectsStyles.module.css';
import omtimeIcon from '../../assets/proimg.jpg';
import omtimeLanding from '../../assets/omtime-landing.png';
import omtimeFeatures from '../../assets/omtime-features.png';
import omtimeCalendar from '../../assets/omtime-calendar.png';
import powipIcon from '../../assets/powip-icon.jpg';
import powipLanding from '../../assets/powip-landing.png';
import powipFeatures from '../../assets/powip-features.png';
import powipDashboard from '../../assets/powip-dashboard.png';
import powipSales from '../../assets/powip-sales.png';
import powipTracking from '../../assets/powip-tracking.png';
import githubIcon from '../../assets/github-dark.svg';
import deployIcon from '../../assets/website.png';
import ProjectShowcase from '../../common/ProjectShowcase';
import { useLanguage } from '../../common/LanguageContext';

function Projects() {
  const { t } = useLanguage();

  const omtimeData = {
    icon: omtimeIcon,
    title: t('omtimeTitle'),
    role: t('omtimeRole'),
    description: t('omtimeDesc'),
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Java', 'Spring Boot', 'Mercado Pago API', 'Clean Architecture'],
    highlights: [
      { label: t('omtimeHL1Label'), text: t('omtimeHL1Text') },
      { label: t('omtimeHL2Label'), text: t('omtimeHL2Text') },
      { label: t('omtimeHL3Label'), text: t('omtimeHL3Text') },
      { label: t('omtimeHL4Label'), text: t('omtimeHL4Text') },
    ],
    carouselImages: [omtimeLanding, omtimeFeatures, omtimeCalendar],
    links: [
      { url: 'https://progestion.vercel.app/', label: t('liveSystem'), icon: deployIcon },
    ],
  };

  const powipData = {
    icon: powipIcon,
    title: t('powipTitle'),
    role: t('powipRole'),
    description: t('powipDesc'),
    techStack: ['Next.js', 'Supabase', 'TailwindCSS', 'Node.js (NestJS)', 'Java', 'Spring Boot', 'RabbitMQ'],
    highlights: [
      { label: t('powipHL1Label'), text: t('powipHL1Text') },
      { label: t('powipHL2Label'), text: t('powipHL2Text') },
      { label: t('powipHL3Label'), text: t('powipHL3Text') },
      { label: t('powipHL4Label'), text: t('powipHL4Text') },
      { label: t('powipHL5Label'), text: t('powipHL5Text') },
    ],
    carouselImages: [powipLanding, powipFeatures, powipDashboard, powipSales, powipTracking],
    links: [
      { url: 'https://www.powip.tech/login', label: t('liveSystem'), icon: deployIcon },
      { url: 'https://www.powip.lat/', label: t('landing'), icon: deployIcon },
    ],
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">{t('projectsTitle')}</h1>
      <div className={styles.projectsContainer}>
        <ProjectShowcase {...omtimeData} githubIcon={githubIcon} deployIcon={deployIcon} />
        <ProjectShowcase {...powipData} githubIcon={githubIcon} deployIcon={deployIcon} />
      </div>
    </section>
  );
}

export default Projects;
