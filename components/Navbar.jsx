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
        className={`${style.hamburger} 
        `}
        onClick={toggleHamburger}
        aria-controls="navigation"
        aria-expanded={hamburgerOpen ? true : false}
      >
        <svg fill="#fff" viewBox="0 0 100 100">
          <rect y="15" className={style.top}></rect>
          <rect y="45" className={style.mid}></rect>
          <rect y="75" className={style.bot}></rect>
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
