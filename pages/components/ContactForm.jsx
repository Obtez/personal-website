import {useState} from "react"
import styles from "../../styles/Contact.module.scss"

const ContactForm = () => {
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    message: ""
  })

  return (
    <form className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="7"></textarea>
      </div>


        <input type="submit" value="Send" />
      
    </form>
  )
}


export default ContactForm