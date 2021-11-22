import React from 'react';
import Image from "next/image"
import styles from "../../styles/Skills.module.scss";
import SkillsItem from './SkillsItem';

const skillsList = [
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

const SkillsScreen = () => {


  return (
    <section id="skills" className={styles.container}>
      <h2>.tech</h2>
      <div className={styles.row}>
      <img className={styles.bracket} src="/assets/skills-icons/left_bracket.svg" alt="bracket" />
      <ul className={styles.skillItemContainer}>
          {
            skillsList.map(skill => <SkillsItem key={skill.text} skill={skill} />)
          }
          </ul>
      <img className={styles.bracket} src="/assets/skills-icons/right_bracket.svg" alt="bracket"/>
      </div>
    </section>
  );
};

export default SkillsScreen;
