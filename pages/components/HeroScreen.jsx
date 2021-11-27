import { BiLinkExternal } from 'react-icons/bi';

import styles from '../../styles/Hero.module.scss';
import Navbar from './Navbar';

const HeroScreen = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.accent__stick__left} />
      <div className={styles.accent__stick__right} />
      <Navbar />
      <div className={styles.container}>
        <div className={styles['header-container']}>
          <div></div>
      <div className={styles['header']}>
            <h2>David Beer,</h2>
            <h1>
              Full Stack <br /> Web Developer
            </h1>
            <div className={styles['header__btn-container']}>
              <a href="#projects" className={styles['header__btn-container__primaryBtn']}>
                My Projects
              </a>
              <a href="#contact" className={styles['header__btn-container__secondaryBtn']}>
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
            <img src='./assets/Group 33.svg' />
          </div>
          <div className={styles['slogan-container']}>
            <p className={styles['slogan-container__text']}>
              MOTIVATED TO  <br /> WORK WITH{' '}
              <span className={styles['slogan-container__text__accent']}>
                YOU
              </span>
            </p>
            <img src='./assets/mobile/arrow-down-mobile.svg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
