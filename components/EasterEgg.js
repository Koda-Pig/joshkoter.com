import style from '../styles/easterEgg.module.css'
import { useEffect } from 'react'
import Link from 'next/link'

export default function EasterEgg() {

  useEffect(() => {

    console.log(!localStorage.getItem('seen-a-pig'))
    if (localStorage.getItem('seen-a-pig')) { 
      (document.querySelector('#easteregg')).classList.add("seenit")
    } else {
      localStorage.setItem('seen-a-pig', true)
    }
  }, [])

  return (
    <Link href='https://youtu.be/dQw4w9WgXcQ' passHref>
      <div id='easteregg' className={style.pig}></div>
    </Link>
  )
}