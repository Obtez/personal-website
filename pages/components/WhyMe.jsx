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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet</p>
        </div>
         <div className={styles.card}>
          <h3><BiCodeCurly /> Full Stack</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet</p>
        </div>
         <div className={styles.card}>
          <h3><AiOutlineFieldTime /> Reliablility</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      {/* SVG for desktop, PNG for mobile */}
      <img className={styles.waveMobile} src="/assets/Waves.png" />
      <img className={styles.wave} src="/assets/Waves.svg" />

    </section>
  )
}

export default WhyMe