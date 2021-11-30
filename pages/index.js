import smoothScroll from 'smoothscroll-polyfill';
import {useState} from "react"
import Head from 'next/head';
import About from './components/About';
import HeroScreen from './components/HeroScreen';
import ProjectsScreen from './components/ProjectsScreen';
import TechScreen from './components/TechScreen';
import WhyMe from './components/WhyMe';
import styles from '../styles/Home.module.scss';
import Contact from './components/Contact';

export default function Home() {
  const [showMenuToggle, setShowMenuToggle] = useState(true);

  if (typeof window !== "undefined") {
    smoothScroll.polyfill();
  }

  function switchMenuToggle() {
    setShowMenuToggle(!showMenuToggle);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>David Beer | Web Development</title>
        <meta name='description' content='David Beer | Web Developer' />
        <meta name="viewport" content="width=device-width, initial-scale = 1.0, viewport-fit=cover" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <HeroScreen showMenuToggle={showMenuToggle} />
          <TechScreen />
        <ProjectsScreen switchMenuToggle={switchMenuToggle} />
        <About />
        <WhyMe />
        <Contact />
      </main>
    </div>
  );
}
