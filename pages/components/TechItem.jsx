import Image from "next/image"
import styles from "../../styles/Tech.module.scss";

const TechItem = ({ tech }) => {
  
  if (!tech) {
    return null;
  }

  return (
    <li className={styles.techItem}>
        <Image src={`/assets/skills-icons/${tech.url}_icon.svg`} alt={tech.text} width={100} height={100} />
      <p>{tech.text}</p>
    </li>
  )
}

export default TechItem