import { smoothScroll } from '../../../helpers/_navHelpers';
import { HiMenu } from 'react-icons/hi';
import DesktopNavbar from './DesktopNavbar';
import styles from '../../../styles/Hero.module.scss';

const MobileNavbar = ({ showMobileMenu, showMenuToggle, toggleMenu }) => {
  
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
                href="#hero"
                className={styles.navbar__link}
                  onClick={(e) => {
                    smoothScroll(e);
                    toggleMenu();
                }}>.home</a>
            </li>

            <li>
              <a
                href="#tech"
                className={styles.navbar__link}
                  onClick={(e) => {
                    smoothScroll(e);
                    toggleMenu();
                }}>.tech</a>
            </li>
      
            <li>
              <a
                href="#projects"
                className={styles.navbar__link}
                  onClick={(e) => {
                    smoothScroll(e);
                    toggleMenu()
              }}>.projects</a>
            </li>
      
            <li>
              <a
                href="#about"
                className={styles.navbar__link}
                  onClick={(e) => {
                    smoothScroll(e);
                    toggleMenu();
                  }
                }>.about me</a>
            </li>

            <li>
              <a
                href="#contact"
                className={styles.navbar__link}
                  onClick={(e) => {
                    smoothScroll(e)
                    toggleMenu()
                }}>.contact</a>
            </li>
          </ul>
        </div>
        )
      }

      <DesktopNavbar />
       
    </div>
  )
}

export default MobileNavbar;
