import Image from "next/image"
import styles from "../../styles/Skills.module.scss";

const SkillsItem = ({ skill }) => {
  
  if (!skill) {
    return null;
  }

  return (
    <li className={styles.skillItem}>
        <Image src={`/assets/skills-icons/${skill.url}_icon.svg`} alt={skill.text} width={100} height={100} />
      <p>{skill.text}</p>
    </li>
  )
}

export default SkillsItem