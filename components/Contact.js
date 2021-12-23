import contactStyles from '../styles/contact.module.css'
import Link from 'next/link'
import { FaLinkedin, FaGithubSquare, FaRegEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className={contactStyles.contactSect}>
      <h2 id='contact'>Get in touch</h2>
      <p>HMU, let&apos;s make something marvellous!</p>
      <div className={contactStyles.socialIcons}>
        <Link href='mailto:info@joshkoter.com' passHref>
          <a className={contactStyles.link}><FaRegEnvelope /> Email</a>
        </Link>
        <Link href='https://www.linkedin.com/in/josh-koter-a3a1b3121/' passHref>
          <a className={contactStyles.link}><FaLinkedin /> LinkedIn</a>
        </Link>
        <Link href='https://github.com/Koda-Pig/' passHref>
          <a className={contactStyles.link}><FaGithubSquare /> GitHub</a>
        </Link>
      </div>
    </div>
  )
}
