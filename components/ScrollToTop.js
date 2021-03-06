import { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import style from '../styles/scroll.module.css'

export default function ScrollToTop() {
  const [isVisible, setVisible] = useState(false)

  const toggleVisbility = () => {
    if (window.pageYOffset > 300) setVisible(true)
    else setVisible(false)
  }

  const scrollToTop = () => {
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
    <>
      <BsFillArrowUpCircleFill
        onClick={scrollToTop}
        className={`${style.scrollIcon} ${
          isVisible ? style.visible : style.invisible
        }`}
      />
    </>
  )
}
