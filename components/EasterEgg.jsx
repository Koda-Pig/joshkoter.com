import style from '../styles/easterEgg.module.scss'
import { useEffect } from 'react'
import Link from 'next/link'

export default function EasterEgg() {
  useEffect(() => {
    if (localStorage.getItem('seen-a-pig'))
      document.querySelector('#easteregg').remove()
    else localStorage.setItem('seen-a-pig', true)
  }, [])

  return (
    <Link href="https://youtu.be/dQw4w9WgXcQ" passHref>
      <div id="easteregg" className={style.pig}></div>
    </Link>
  )
}
