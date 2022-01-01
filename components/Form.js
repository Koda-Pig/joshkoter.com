import formStyles from '../styles/form.module.css'

export default function Form() {

  let btnTxt = 'send'
  const submitForm = (event, btnTxt) => {
    event.preventDefault()
    btnTxt = 'sending'
  }

  return (
  <div className={formStyles.formCard}>
    <h3>Send a message:</h3>
    <form onSubmit={submitForm} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="contact" value="contact" />
        <div className={formStyles.formControl}>
            <input type="text" name="name" placeholder="name" required autoComplete='name' />
        </div>
        <div className={formStyles.formControl}>
            <input type="email" name="email" placeholder="you@domain.com" required autoComplete='email'/>
        </div>
        <div className={formStyles.formControl}>
          <textarea name="message" cols="30" rows="2" placeholder='howzit!' required></textarea>
        </div>
        <input type="submit" value={btnTxt} />
    </form>
  </div>
  )
}
