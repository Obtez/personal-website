import { useState } from 'react';
import { BsGithub } from 'react-icons/bs'
import {IoCloseOutline} from 'react-icons/io5'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styles from "../../../styles/ProjectModal.module.scss"
import ProjectHeader from './ProjectHeader';


const ProjectModal = ({ project, toggleModal }) => {
  const [activeImage, setActiveImage] = useState(0)
  const [touchPosition, setTouchPosition] = useState(null)

  if (!project) {
    return null;
  }

  function handleTouchStart(e) {
    if (project.image.length <= 1) return

    setTouchPosition(e.touches[0].clientX)
  }

  function handleTouchEnd(e) {
    if (project.image.length <= 1) return

    const touchEndPosition = e.changedTouches[0].clientX
    const touchDifference = touchEndPosition - touchPosition

    if (touchDifference > 20) {
      handlePreviousImage()
    } else if (touchDifference < -20) {
      handleNextImage()
    }
  }

  function handleNextImage() {
    if (activeImage < project.image.length - 1) {
      setActiveImage(activeImage + 1)
    } else {
      setActiveImage(0)
    }
  }

  function handlePreviousImage() {
    if (activeImage > 0) {
      setActiveImage(activeImage - 1)
    } else {
      setActiveImage(project.image.length - 1)
    }
  }

  function formatProjectDescription () {
    if (project.description.includes("\n")) {
      const splitDescription = project.description.split("\n")
      return splitDescription.map(line => <p key={line}>{line}</p>)
    } else {
      return project.description
    }
  }

  return (
    <div className={styles.modalContainer} onClick={() => toggleModal(null)}>
      <div className={styles.projectModal} onClick={(e) => {e.stopPropagation()}}>
        <IoCloseOutline className={styles.closeBtn} onClick={() => toggleModal(null)}/>
        <div className={styles.descriptionContainer}>
          
          <ProjectHeader project={project} />

           <p className={styles.projectTech}>{project.tech}</p>
       
          <div className={styles.projectSummary}>{ formatProjectDescription() }</div>
          
           <div className={styles.btnContainer}>
            <a href="#contact" className={styles.primaryBtn} onClick={() => toggleModal(null)}>Contact Me</a>
            <a href={project.githubURL} target="_blank" rel="noreferrer" className={styles.secondaryBtn}><BsGithub /> GitHub</a>
          </div>
        </div>
        <div className={styles.imageArea}>
          <div className={styles.projectImageContainer}>
            {
              project.image.length > 1 && (
               <div className={styles.controlsOverlay} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <div className={styles.arrowLeftContainer} onClick={handlePreviousImage}>
                  <BsChevronLeft className={styles.arrowLeft} />
                </div>
              <div className={styles.arrowRightContainer} onClick={handleNextImage}>
                  <BsChevronRight className={styles.arrowRight} />
              </div>
              </div>
              )
            }
            <div className={styles.projectImageCarousel}>
              <img
                src={project.image[activeImage]}
                alt={project.title}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />
          
            </div>
          
          </div>
        </div>
        <div className={styles.buffer}/>
        <div className={styles.controls}>
          { project.image.length > 1 && (
            project.image.map((image, index) => {
              return (
                <div
                  key={index}
                  className={index === activeImage ? styles.active : null}
                  onClick={() => setActiveImage(index)}
                />
              )
            })
          )}
        </div>
      </div>
     
    </div>
  )
}

export default ProjectModal;