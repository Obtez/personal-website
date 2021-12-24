import Image from "next/image"
import styles from "../../styles/WhyMe.module.scss"
import { IoDiamondOutline } from "react-icons/io5"
import { BiCodeCurly } from "react-icons/bi"
import {AiOutlineFieldTime} from "react-icons/ai"

const WhyMe = () => {
  return (
    <section>
      <div className={styles.container}>
        <h2>.why me</h2>
      </div>

      <div className={styles.row}>

          <div className={styles.line}></div>

        
        <div className={styles.card}>
          <h3><IoDiamondOutline /> Quality</h3>
          <p>I strive to only deliver the best. Many thoughts not only go into the code itself, but also the projects performance and maintainability.</p>
        </div>
         <div className={styles.card}>
          <h3><BiCodeCurly /> Full Stack</h3>
          <p>Be it Frontend or Backend - I can handle it. Need a nice looking landing page for your business? Sure. Want to connect your website to a database? Let&apos;s do it.</p>
        </div>
         <div className={styles.card}>
          <h3><AiOutlineFieldTime /> Up-to-date</h3>
          <p>The industry is ever-changing. Thus, it is important to me to always stay up to date with the newest versions of my technology stack.</p>
        </div>
      </div>

      {/* SVG for desktop, PNG for mobile */}
      <img className={styles.waveMobile} src="/assets/Waves.png" />
      <img className={styles.wave} src="/assets/Waves.svg" />

    </section>
  )
}

export default WhyMe