import React from 'react';
import styles from "../../styles/Tech.module.scss";
import TechItem from './TechItem';

const techList = [
  {
    url: "html",
    text: "HTML"
  },
  {
    url: "css",
    text: "CSS"
  },
  {
    url: "sass",
    text: "SCSS"
  },
  {
    url: "js",
    text: "JavaScript"
  },
   {
    url: "typescript",
    text: "TypeScript"
  },
  {
    url: "react",
    text: "React"
  },
  {
    url: "nodejs",
    text: "Node.js" 
  },
  {
    url: "nextjs",
    text: "Next.js"
  },
  {
    url: "mongodb",
    text: "MongoDB"
  },
  {
    url: "git",
    text: "Git"
  },
  {
    url: "github",
    text: "GitHub"
  }
]

const TechScreen = () => {


  return (
    <section id="skills" className={styles.container}>
      <h2>.tech</h2>
      <div className={styles.row}>
      <img className={styles.bracket} src="/assets/skills-icons/left_bracket.svg" alt="bracket" />
      <ul className={styles.techItemContainer}>
          {
            techList.map(tech => <TechItem key={tech.text} tech={tech} />)
          }
          </ul>
      <img className={styles.bracket} src="/assets/skills-icons/right_bracket.svg" alt="bracket"/>
      </div>
    </section>
  );
};

export default TechScreen;
