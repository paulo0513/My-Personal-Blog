import { useState } from "react"
import axios from "axios"
import { baseAboutURL, config } from "../services"


function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newContact = {
      name,
      email,
      subject,
      message,
    }
    await axios.post(baseAboutURL, { fields: newContact }, config)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="contact-title">Contact Me</h2>
        <label htmlFor="name" />
        <input
          className="about-name"
          type="text"
          height="5px"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        <label htmlFor="email" />
        <input
          type="text"
          className="contact-email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <label htmlFor="subject" />
        <input
          type="text"
          className="contact-subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          />
        <label htmlFor="message" />
        <textarea
          type="text"
          className="contact-message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          />
        <button class="contact-button" type="submit">Submit</button>
    </form>
  )
}

export default Contact;