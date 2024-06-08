'use client'

import { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import style from '../styles/scroll.module.scss'

export default function ScrollToTop() {
  const [isVisible, setVisible] = useState(false),
    toggleVisbility = () => {
      if (window.scrollY > 300) setVisible(true)
      else setVisible(false)
    },
    scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisbility)
    return () => {
      window.removeEventListener('scroll', toggleVisbility)
    }
  }, [])

  return (
    <button onClick={scrollToTop}>
      <BsFillArrowUpCircleFill
        className={`${style.scrollIcon} ${
          isVisible ? style.visible : style.invisible
        }`}
      />
    </button>
  )
}
