import style from '../styles/contact.module.scss'
import Link from 'next/link'
import { FaLinkedin, FaGithubSquare, FaRegEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className={style.contactSect}>
      <h2 id="contact">Get in touch</h2>
      <div className={style.socialIcons}>
        <Link href="mailto:josh.koter@gmail.com" passHref>
          <a className={style.link}>
            <FaRegEnvelope /> Email
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/josh-koter/" passHref>
          <a className={style.link}>
            <FaLinkedin /> LinkedIn
          </a>
        </Link>
        <Link href="https://github.com/Koda-Pig/" passHref>
          <a className={style.link}>
            <FaGithubSquare /> GitHub
          </a>
        </Link>
      </div>
    </div>
  )
}
