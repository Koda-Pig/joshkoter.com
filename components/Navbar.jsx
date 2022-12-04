import Link from 'next/link'
import style from '../styles/navbar.module.scss'
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

  const menuList = [
    { link: '/', text: 'Home' },
    { link: '#weather-app', text: 'Weather App' },
    { link: '#audio-visualiser', text: 'Audio Visualiser' },
    { link: '#when-pigs-fly', text: 'When Pigs Fly' },
    { link: '#knight-of-cups', text: 'Knight of Cups' },
    { link: '#contact', text: 'Contact' }
  ]
  const menuItems = menuList.map((item, index) => {
    return (
      <Link key={index} href={item.link} passHref>
        <a className={style.link} onClick={toggleHamburger}>
          {item.text}
        </a>
      </Link>
    )
  })

  return (
    <>
      <button
        className={style.hamburger}
        onClick={toggleHamburger}
        aria-controls="navigation"
        aria-expanded={hamburgerOpen ? true : false}
      >
        <svg viewBox="-10 -10 120 120">
          <path d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70" />
        </svg>
      </button>
      <nav
        className={`${style.nav} ${isVisible ? style.showBg : style.hideBg} ${
          hamburgerOpen ? style.open : style.closed
        }`}
      >
        {menuItems}
      </nav>
    </>
  )
}
