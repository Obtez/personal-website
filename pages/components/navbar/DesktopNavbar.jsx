import { smoothScroll } from '../../../helpers/_navHelpers';
import styles from '../../../styles/Hero.module.scss';

const DesktopNavbar = () => {
  return (
  <ul className={styles.navbar__list}>
    <li>
        <a href="#hero" className={styles.navbar__link} onClick={(e) => smoothScroll(e)}>.home</a>
    </li>

    <li>
        <a href="#tech" className={styles.navbar__link} onClick={(e) => smoothScroll(e)}>.tech</a>
    </li>
      
    <li>
        <a href="#projects" className={styles.navbar__link} onClick={(e) => smoothScroll(e)}>.projects</a>
    </li>
      
    <li>
        <a href="#about" className={styles.navbar__link} onClick={(e) => smoothScroll(e)}>.about me</a>
    </li>

    <li>
        <a href="#contact" className={styles.navbar__link} onClick={(e) => smoothScroll(e)}>.contact</a>
    </li>
  </ul>
  )
 }

export default DesktopNavbar;