import styles from './ProjectsStyles.module.css';
import proImg from '../../assets/proimg.jpg';
import buenSaborImg from '../../assets/foodimg.jpg';
import panteraImg from '../../assets/wasdimg.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={buenSaborImg}
          link="https://github.com/OctavioToledo/Java-API-Rest-CRUD"
          h3="E-commerce"
          p="Buen Sabor E-commerce"
        />
        <ProjectCard
          src={proImg}
          link="https://github.com/OctavioToledo/Java-API-Rest-CRUD"
          h3="El Buen Sabor"
          p="Store management"
        />
        <ProjectCard
          src={panteraImg}
          link="https://github.com/OctavioToledo/proyectoLab4-Front"
          h3="Pantera Store"
          p="Instruments Shop"
        />
        
      </div>
    </section>
  );
}

export default Projects;