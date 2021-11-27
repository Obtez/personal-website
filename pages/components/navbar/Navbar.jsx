import {useState} from 'react'
import MobileNavbar from './MobileNavbar';
import styles from '../../../styles/Hero.module.scss';

const Navbar = ({ showMenuToggle }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function toggleMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <nav className={styles.navbar}>
      <MobileNavbar
        showMobileMenu={showMobileMenu}
        showMenuToggle={showMenuToggle}
        toggleMenu={toggleMenu}
      />
    </nav>
  )
}

export default Navbar;