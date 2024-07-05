import styles from './ProjectsStyles.module.css';
import proImg from '../../assets/proimg.jpg';
import buenSaborImg from '../../assets/foodimg.jpg';
import panteraImg from '../../assets/wasdimg.jpg';
import githubIcon from '../../assets/github-dark.svg';
import deployIcon from '../../assets/website.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={buenSaborImg}
          githubLink=""/* "https://github.com/brunoSacchetti/Ecommerce-ElBuenSabor-V1" */
          deployLink="https://buen-sabor-ecommerce-ten.vercel.app"
          h3="E-commerce"
          p="Buen Sabor E-commerce"
          githubIcon={githubIcon}
          deployIcon={deployIcon}
        />
        <ProjectCard
          src={proImg}
          githubLink=""/* "https://github.com/brunoSacchetti/elBuenSaborBackend" */
          deployLink="https://elbuensabor-dashboard.vercel.app/login"
          h3="El Buen Sabor"
          p="Store management"
          githubIcon={githubIcon}
          deployIcon={deployIcon}
        />
        <ProjectCard
          src={panteraImg}
          githubLink="https://github.com/OctavioToledo/proyectoLab4-Backend"
          deployLink="https://github.com/OctavioToledo/proyectoLab4-Front"
          h3="Pantera Store"
          p="Instruments Shop"
          githubIcon={githubIcon}
          deployIcon={deployIcon}
        />
      </div>
    </section>
  );
}

export default Projects;
