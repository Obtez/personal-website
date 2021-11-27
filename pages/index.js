import Head from 'next/head';
import About from './components/About';
import HeroScreen from './components/HeroScreen';
import ProjectsScreen from './components/ProjectsScreen';
import SkillsScreen from './components/SkillsScreen';
import WhyMe from './components/WhyMe';
import styles from '../styles/Home.module.scss';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David Beer | Web Development</title>
        <meta name='description' content='David Beer | Web Developer' />
        <meta name="viewport" content="width=device-width, initial-scale = 1.0" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <HeroScreen />
          <SkillsScreen />
        <ProjectsScreen />
        <About />
        <WhyMe />
        <Contact />
      </main>
    </div>
  );
}
