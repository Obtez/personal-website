import ProjectCard from "./ProjectCard"
import styles from "../../styles/Projects.module.scss"

const projects = [
  {
    image: "/assets/project-images/project-img-3.png",
    tech: "HTML, CSS, React",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus mi, sagittis ut commodo",
    url: "https://www.github.com"
  },
  {
    image: "/assets/project-images/project-img-3.png",
    tech: "HTML, CSS, React",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus mi, sagittis ut commodo",
    url: "https://www.github.com"
  },
  {
    image: "/assets/project-images/project-img-3.png",
    tech: "HTML, CSS, React",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus mi, sagittis ut commodo",
    url: "https://www.github.com"
  },
  {
    image: "/assets/project-images/project-img-3.png",
    tech: "HTML, CSS, React",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus mi, sagittis ut commodo",
    url: "https://www.github.com"
  },
  {
    image: "/assets/project-images/project-img-3.png",
    tech: "HTML, CSS, React",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus mi, sagittis ut commodo",
    url: "https://www.github.com"
  }
]

const ProjectsScreen = () => {
  return (
    <section id="projects">
      <header className={styles.container}>
        <h2>.my projects</h2>
      </header>
      <div className={styles.projectsContainer}>
        {
          projects.map(project => <ProjectCard project={project} key={project.title} />)
        }
       
      </div>
    </section>
  )
}

export default ProjectsScreen