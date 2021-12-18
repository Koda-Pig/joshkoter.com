import styled from 'styled-components'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiSololearn } from 'react-icons/si'
import navbarStyles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <div className={navbarStyles.nav}>
      <div>
        <Link href='/' passHref>
          <a className={navbarStyles.link}>Home</a>
        </Link>
        <Link href='/about' passHref>
          <a className={navbarStyles.link}>About</a>
        </Link>
        <Link href='/contact' passHref>
          <a className={navbarStyles.link}>Contact</a>
        </Link>
      </div>
      <div className={navbarStyles.socialIcons}>
        <Link href='https://www.linkedin.com/in/josh-koter-a3a1b3121/' passHref>
          <a className={navbarStyles.link}><FaLinkedinIn /></a>
        </Link>
        <Link href='https://github.com/Koda-Pig/' passHref>
          <a className={navbarStyles.link}><FaGithub /></a>
        </Link>
        <Link href='https://www.sololearn.com/profile/627086' passHref>
          <a className={navbarStyles.link}><SiSololearn /></a>
        </Link>
      </div>

    </div>
  )
}
