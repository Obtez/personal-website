import {useState} from 'react'
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import styles from "../../styles/Projects.module.scss"

const projects = [
  {
    image: ["/assets/project-images/hedgeycards.png"],
    tech: "HTML, CSS, React",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus mi, sagittis ut commodo",
    url: "https://www.github.com"
  },
  {
    image: ["/assets/project-images/hedgeycards.png"],
    tech: "HTML, CSS, React",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus mi, sagittis ut commodo",
    url: "https://www.github.com"
  },
  {
    image: ["/assets/project-images/hedgeycards.png", "/assets/project-images/hedgeycards.png", "/assets/project-images/hedgeycards.png"],
    tech: "HTML, CSS, React",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus mi, sagittis ut commodo",
    url: "https://www.github.com"
  },
  {
    image: ["/assets/project-images/hedgeycards.png"],
    tech: "HTML, CSS, React",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus mi, sagittis ut commodo",
    url: "https://www.github.com"
  },
  {
    image: ["/assets/project-images/hedgeycards.png"],
    tech: "HTML, CSS, React",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus mi, sagittis ut commodo",
    url: "https://www.github.com"
  }
]

const ProjectsScreen = () => {
  const [project, setProject] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  function toggleModal(project) {
    if (modalOpen) {
      setProject(null)
      setModalOpen(false)
    } else {
      setProject(project)
      setModalOpen(true)
    }
  }

  return (
    <section id="projects">
      <header className={styles.container}>
        <h2>.my projects</h2>
      </header>
      <div className={styles.projectsContainer}>
        {
          modalOpen && <ProjectModal toggleModal={toggleModal} project={project} />
        }
        
        {
          projects.map(project => <ProjectCard project={project} key={project.title} toggleModal={toggleModal} />)
        }
       
      </div>
    </section>
  )
}

export default ProjectsScreen