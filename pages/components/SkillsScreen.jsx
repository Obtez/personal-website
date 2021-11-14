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
    url: "react",
    text: "React"
  },
  {
    url: "nodejs",
    text: "Node.js /\nExpress" 
  },
  {
    url: "nextjs",
    text: "Next.js"
  },
  {
    url: "python",
    text: "Python"
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
      <h2>.skills</h2>
      <div className={styles.row}>
      <Image className={styles.bracket} src="/assets/skills-icons/left_bracket.svg" alt="bracket" width={100} height={100} />
      <ul className={styles.skillItemContainer}>
          {
            skillsList.map(skill => <SkillsItem key={skill.text} skill={skill} />)
          }
          </ul>
      <Image className={styles.bracket} src="/assets/skills-icons/right_bracket.svg" alt="bracket" width={100} height={100}/>
      </div>
    </section>
  );
};

export default SkillsScreen;
