import { HiMenu } from 'react-icons/hi';
import styles from '../../../styles/Hero.module.scss';

const MobileNavbar = ({showMobileMenu, showMenuToggle, toggleMenu}) => {
  return (
    <div className={styles.mobileMenu}>
       {
        showMenuToggle && <HiMenu onClick={toggleMenu} className={styles.toggle__icon} />
      }
      {
        showMobileMenu && (
        <div className={styles.mobile__menu__container} onClick={toggleMenu}>
          <ul className={styles.navbar__list__mobile} onClick={(e) => {e.stopPropagation()}}>
            <li>
              <a
                href="#"
                className={styles.navbar__link}
                onClick={toggleMenu}>.home</a>
            </li>

            <li>
              <a
                href="#skills"
                className={styles.navbar__link}
                onClick={toggleMenu}>.tech</a>
            </li>
      
            <li>
              <a
                href="#projects"
                className={styles.navbar__link}
              onClick={toggleMenu}>.projects</a>
            </li>
      
            <li>
              <a
                href="#about"
                className={styles.navbar__link}
                onClick={toggleMenu}>.about me</a>
            </li>

            <li>
              <a
                href="#contact"
                className={styles.navbar__link}
                onClick={toggleMenu}>.contact</a>
            </li>
          </ul>
        </div>
        )
      }
       
    </div>
  )
}

export default MobileNavbar;
