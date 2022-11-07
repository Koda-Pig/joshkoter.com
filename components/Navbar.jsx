import Link from 'next/link'
import style from '../styles/navbar.module.css'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isVisible, setVisible] = useState(false)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleVisbility = () => {
    if (window.pageYOffset > 100) setVisible(true)
    else setVisible(false)
  }

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisbility)
    return () => {
      window.removeEventListener('scroll', toggleVisbility)
    }
  }, [])

  return (
    <>
      <div className={style.hamburger} onClick={toggleHamburger}>
        <div
          className={`${style.burger} ${style.burger1} ${
            hamburgerOpen ? style.open : style.closed
          }`}
        />
        <div
          className={`${style.burger} ${style.burger2} ${
            hamburgerOpen ? style.open : style.closed
          }`}
        />
        <div
          className={`${style.burger} ${style.burger3} ${
            hamburgerOpen ? style.open : style.closed
          }`}
        />
      </div>
      <nav
        className={`${style.nav} ${isVisible ? style.showBg : style.hideBg} ${
          hamburgerOpen ? style.open : style.closed
        }`}
      >
        <Link href="/" passHref>
          <a className={style.link} onClick={toggleHamburger}>
            <span className={style.emoji}>🏠</span> Home
          </a>
        </Link>
        <Link href="#weather-app" passHref>
          <a className={style.link} onClick={toggleHamburger}>
            <span className={style.emoji}>⛅</span> Weather App
          </a>
        </Link>
        <Link href="#audio-visualiser" passHref>
          <a className={style.link} onClick={toggleHamburger}>
            <span className={style.emoji}>🎵</span> Audio Visualiser
          </a>
        </Link>
        <Link href="#when-pigs-fly" passHref>
          <a className={style.link} onClick={toggleHamburger}>
            <span className={style.emoji}>🐷</span> When Pigs Fly
          </a>
        </Link>
        <Link href="#knight-of-cups" passHref>
          <a className={style.link} onClick={toggleHamburger}>
            <span className={style.emoji}>☕</span> Knight of Cups
          </a>
        </Link>
        <Link href="#contact" passHref>
          <a className={style.callToAction} onClick={toggleHamburger}>
            Contact
          </a>
        </Link>
      </nav>
    </>
  )
}
