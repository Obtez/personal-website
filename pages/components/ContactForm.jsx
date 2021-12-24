import {useState} from "react"
import styles from "../../styles/Contact.module.scss"

const ContactForm = () => {
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [successMessage, setSuccessMessage] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageData({
      ...messageData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: messageData.email,
        name: messageData.name,
        message: messageData.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }

    setSuccessMessage(true)

    setMessageData({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={messageData.name}  onChange={handleChange} required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={messageData.email}  onChange={handleChange} required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" value={messageData.message} onChange={handleChange} ></textarea>
      </div>

      <input type="submit" value="Send" className={styles.submitBtn} />
    </form>
  )
}


export default ContactForm