import dynamic from 'next/dynamic'
import {useState, useEffect} from 'react'
const ProjectCard = dynamic(() => import('./ProjectCard'))
const ProjectModal = dynamic(() => import('./projectModal/ProjectModal'))
import styles from "../../styles/Projects.module.scss"

const projects = [
  {
    image: ["/assets/project-images/hedgeycards.png", "/assets/project-images/hedgeycards2.png", "/assets/project-images/hedgeycards3.png"],
    tech: "React, Typescript, SCSS",
    title: "Flash Card Builder",
    summary: "A web application that helps with quickly creating flash cards arranging them in a layout ready for print.",
    description: "Creating multiple flash cards through the use of a typical text processor such as Microsoft Word or Pages can be a hassle. You have to deal with text-boxes and arrange them neatly." + "\n" + "The goal with this project was providing a simple alternative where you just have to type in the content. The application does the rest for you. Through the use of the TAB-key (next line) and the ENTER-key (add card) it is easy to create new cards in no time." + "\n" +"The content is stored in the browser's local storage and persists through reload. And if there are any mistakes or you want to remove a card, you can do that as well.",
    githubURL: "https://github.com/Obtez/flash-card-generator",
    demoURL: "https://happy-hoover-178c46.netlify.app/"
  },
]

const ProjectsScreen = ({switchMenuToggle}) => {
  const [project, setProject] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [lastPosition, setLastPosition] = useState(0)

  // disable scrolling when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.position = "relative"
      document.body.style.overflow = "hidden"
      document.body.height = "100vh"
    } else {
      document.body.style.position = "unset"
      document.body.style.overflow = "unset"
      document.body.height = "unset"
    }
  }, [modalOpen])
  
  function toggleModal(project) {
    if (modalOpen) {
      setProject(null)
      setModalOpen(false)
      switchMenuToggle(true)

      if(typeof window !== "undefined") {
        window.scrollTo(0, lastPosition)
      }
      
    } else {
      setProject(project)
      setModalOpen(true)
      switchMenuToggle(false)

      if (typeof window !== "undefined") {
        setLastPosition(window.scrollY)
      }
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