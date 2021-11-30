import { BiLinkExternal } from 'react-icons/bi';
import { smoothScroll } from '../../helpers/_navHelpers';

import styles from '../../styles/Hero.module.scss';
import Navbar from "./navbar/Navbar"

const HeroScreen = ({showMenuToggle}) => {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.accent__stick__left} />
      <div className={styles.accent__stick__right} />
      <Navbar showMenuToggle={ showMenuToggle } />
      <div className={styles.container}>
        <div className={styles['header-container']}>
          <div></div>
      <div className={styles['header']}>
            <h2>David Beer,</h2>
            <h1>
              Full Stack <br /> Web Developer
            </h1>
            <div className={styles['header__btn-container']}>
              <a href="#projects"
                className={styles['header__btn-container__primaryBtn']}
              onClick={(e) => smoothScroll(e)}>
                My Projects
              </a>
              <a href="#contact"
                className={styles['header__btn-container__secondaryBtn']}
              onClick={(e) => smoothScroll(e)}>
                <BiLinkExternal
                  className={styles['header__btn-container__btnIcon']}
                />
                Contact Me
              </a>
            </div>
          </div>
          <div className={styles['folder-icon-container']}>
            <img src='./assets/Folder Icon.svg' />
          </div>
          <div className={styles['arrow-icon-container']}>
            <img src='./assets/Group 33.svg' onClick={(e) => smoothScroll(e, "#tech")} />
          </div>
          <div className={styles['slogan-container']}>
            <p className={styles['slogan-container__text']}>
              MOTIVATED TO  <br /> WORK WITH{' '}
              <span className={styles['slogan-container__text__accent']}>
                YOU
              </span>
            </p>
            <img src='./assets/mobile/arrow-down-mobile.svg' onClick={(e) => smoothScroll(e, "#tech")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
