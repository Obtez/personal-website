import {useState} from 'react'
import { HiMenu } from 'react-icons/hi';
import styles from '../../styles/Hero.module.scss';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.mobileMenu}>
        <HiMenu onClick={toggleMenu} className={styles.toggle__icon} />
        {
          showMobileMenu && (
            <div className={styles.mobile__menu__container}>
              <ul className={styles.navbar__list__mobile}>
                <li>
                    <a href="#" className={styles.navbar__link}>.home</a>
                </li>

                <li>
                    <a href="#skills" className={styles.navbar__link}>.tech</a>
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
            </div>
          
          )
        }
        
      </div>

    <ul className={styles.navbar__list}>
      <li>
          <a href="#" className={styles.navbar__link}>.home</a>
      </li>

      <li>
          <a href="#skills" className={styles.navbar__link}>.tech</a>
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