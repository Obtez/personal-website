import Image from "next/image"
import { BsGithub } from "react-icons/bs"
import styles from "../../styles/Projects.module.scss"

const ProjectCard = ({ project, toggleModal }) => {
  if (!project) {
    return null;
  }

  return (
    <div className={styles.projectCard}>

      <Image src={project.image[0]} alt={project.title} width={256} height={171} />

      <p className={styles.tech}>{project.tech}</p>

      <h3>{project.title}</h3>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.btnContainer}>
      <button type="button" onClick={() => toggleModal(project)}>Details</button>
      <a type="button"><BsGithub className={styles.githubIcon} /> GitHub</a>
      </div>
    </div>
  )
}

export default ProjectCard