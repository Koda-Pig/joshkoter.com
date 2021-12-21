import Link from 'next/link'
import navbarStyles from '../styles/navbar.module.css'
import { useEffect, useState } from 'react'


export default function Navbar() {
  const [isVisible, setVisible] = useState(false)
  const toggleVisbility = () => {
    if (window.pageYOffset > 100) setVisible(true)
    else setVisible(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisbility)
    return () => {
      window.removeEventListener('scroll', toggleVisbility)
    }
  }, [])

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <>
      <div className={navbarStyles.hamburger} onClick={toggleHamburger}>
        <div className={`${navbarStyles.burger} ${navbarStyles.burger1} ${hamburgerOpen ? navbarStyles.open : navbarStyles.closed}`} />
        <div className={`${navbarStyles.burger} ${navbarStyles.burger2} ${hamburgerOpen ? navbarStyles.open : navbarStyles.closed}`} />
        <div className={`${navbarStyles.burger} ${navbarStyles.burger3} ${hamburgerOpen ? navbarStyles.open : navbarStyles.closed}`} />
      </div>
      <nav className={`${navbarStyles.nav} ${isVisible ? navbarStyles.showBg : navbarStyles.hideBg} ${hamburgerOpen ? navbarStyles.open : navbarStyles.closed}`}>
        <Link href='/' passHref>
          <a className={navbarStyles.link}>Home</a>
        </Link>
        <Link href='#contact' passHref>
          <a className={navbarStyles.link}>Contact</a>
        </Link>
        <Link href='#weather-app' passHref>
          <a className={navbarStyles.link}>Weather App</a>
        </Link>
        <Link href='#audio-visualiser' passHref>
          <a className={navbarStyles.link}>Audio Visualiser</a>
        </Link>
        <Link href='#when-pigs-fly' passHref>
          <a className={navbarStyles.link}>When Pigs Fly</a>
        </Link>
        <Link href='#knight-of-cups' passHref>
          <a className={navbarStyles.link}>Knight of Cups</a>
        </Link>
      </nav>
    </>
  )
}
