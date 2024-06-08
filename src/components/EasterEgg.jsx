'use client'

import style from '../styles/easterEgg.module.scss'
import { useEffect } from 'react'

export default function EasterEgg() {
  useEffect(() => {
    if (localStorage.getItem('seen-a-pig'))
      document.querySelector('#easteregg').remove()
    else localStorage.setItem('seen-a-pig', true)
  }, [])

  return (
    <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" title="easter egg">
      <div id="easteregg" className={style.pig}></div>
    </a>
  )
}
