import style from '../styles/form.module.scss'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useState } from 'react'

export default function Form() {
  const [isVisible, setVisible] = useState(false),
    submitForm = (event) => {
      event.preventDefault()
      let contactForm = document.querySelector('#contactForm'),
        formData = new FormData(contactForm)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
        .then(() => {
          setVisible(true)
        })
        .catch((error) => alert(error))
    }

  return (
    <div
      className={`${style.formCard} ${
        isVisible ? style.submitted : style.notSubmitted
      }`}
    >
      <h3>Send a message: </h3>
      <form
        onSubmit={submitForm}
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        id="contactForm"
      >
        <input type="hidden" name="contact" value="contact" />
        <div className={style.formControl}>
          <input
            type="text"
            name="name"
            placeholder="name"
            required
            autoComplete="name"
          />
        </div>
        <div className={style.formControl}>
          <input
            type="email"
            name="email"
            placeholder="you@domain.com"
            required
            autoComplete="email"
          />
        </div>
        <div className={style.formControl}>
          <textarea
            name="message"
            cols="30"
            rows="2"
            placeholder="howzit!"
            required
          ></textarea>
        </div>
        <input type="submit" value="send" />
      </form>
      <p className={style.submitMsg}>
        <AiFillCheckCircle className={style.tick} /> Thanks! I&apos;ll be in
        touch
      </p>
    </div>
  )
}
