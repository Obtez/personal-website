import Image from "next/image"
import { AiFillGithub } from "react-icons/ai"
import styles from "../../styles/Projects.module.scss"

const ProjectCard = ({project}) => {
  return (
    <div className={styles.projectCard}>

      <Image src={project.image} alt={project.title} width={256} height={171} />

      <p className={styles.tech}>{project.tech}</p>

      <h3>{project.title}</h3>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.btnContainer}>
      <button type="button">Details</button>
      <a type="button"><AiFillGithub className={styles.githubIcon} /> GitHub</a>
      </div>
    </div>
  )
}

export default ProjectCard