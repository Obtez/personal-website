import styles from "../../styles/About.module.scss"

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2>.about me</h2>
      <p>I am a Full Stack Javascript Developer living in Zurich, Switzerland. While having worked with multiple programming languages, my main focus is on Javascript / Typescript on the Frontend, as well as the Backend (Node.js). Since I got a degree in an unrelated field, I have been teaching myself programming mostly without mentoring. This has worked out quite well so far and has lead me to acquiring skills in the technologies you can see above.</p>
      <p>Since being self-taught comes with certain challenges, I was able to develop life-long skills such as constant learning, problem-solving, and project management.</p>
      <p>My main technology stack consists of MongoDB, Express, React, Nodejs - also known as <em>MERN</em>.</p>
    </section>
  )
}

export default About