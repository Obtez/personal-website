import {FaPlayCircle} from 'react-icons/fa'
import styles from "../../../styles/ProjectModal.module.scss"

const ProjectHeader = ({ project }) => {

  if (!project) return null

  return (
    <header className={styles.projectHeader}>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <a href={project.demoURL} target="_blank" rel="noreferrer" className={`${styles.secondaryBtn} ${styles.demoBtn} ${styles.demoBtnMobile}`}><FaPlayCircle /> Demo</a>
    </header>
  )
};

export default ProjectHeader;