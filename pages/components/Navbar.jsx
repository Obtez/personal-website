import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import styles from '../../styles/Hero.module.scss';

const Navbar = () => {
  return (
  <nav className={styles.navbar}>
    <HiMenu className={styles.navbar__toggle} />
    <ul className={styles.navbar__list}>
      <li>
          <a href="#" className={styles.navbar__link}>.home</a>
      </li>

      <li>
          <a href="#skills" className={styles.navbar__link}>.skills</a>
      </li>
      
      <li>
          <a href="#projects" className={styles.navbar__link}>.projects</a>
      </li>
      
      <li>
          <a href="#about" className={styles.navbar__link}>.about me</a>
      </li>

      <li>
          <a href="#contact" className={styles.navbar__link}>.contact</a>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar