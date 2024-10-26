import Link from 'next/link'
import style from '../styles/navbar.module.scss'
import { useState } from 'react'

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen)

  const menuList = [
    { link: '/', text: 'Home', id: '1' },
    {
      hasChildren: true,
      text: 'Projects',
      id: '2',
      children: [
        { link: '#lisa-website', text: 'Lisa Liebermann website', id: '3' },
        { link: '#weather-app', text: 'Weather App', id: '4' },
        { link: '#audio-visualiser', text: 'Audio Visualiser', id: '5' },
        { link: '#stick-hero-tribute', text: 'Stick Hero', id: '6' },
        { link: '#when-pigs-fly', text: 'When Pigs Fly', id: '7' },
        { link: '#knight-of-cups', text: 'Knight of Cups', id: '8' },
      ],
    },
    { link: '#contact', text: 'Contact', id: '9' },
  ]
  const menuItems = menuList.map(item => {
    if (item.hasChildren) {
      return (
        <div key={item.id} className={`${style.dropdown} ${style.link}`}>
          <input
            type="checkbox"
            id={`${item.text}-submenu`}
            name={`${item.text}-submenu`}
          />
          <label className={style.dropbtn} htmlFor={`${item.text}-submenu`}>
            {item.text}
          </label>
          <div className={style.dropdownContent}>
            <div className={style.dropdownContentInner}>
              {item.children.map(child => (
                <Link key={item.id} href={child.link} passHref>
                  <a onClick={toggleHamburger}>{child.text}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )
    }
    return (
      <Link key={item.id} href={item.link} passHref>
        <a className={style.link} onClick={toggleHamburger}>
          {item.text}
        </a>
      </Link>
    )
  })

  return (
    <header>
      <button
        className={style.hamburger}
        onClick={toggleHamburger}
        aria-controls="navigation"
        aria-expanded={hamburgerOpen}
      >
        <svg viewBox="-10 -10 120 120">
          <path d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70" />
        </svg>
      </button>
      <nav className={`${style.nav} ${hamburgerOpen ? style.open : ''}`}>
        {menuItems}
      </nav>
    </header>
  )
}
