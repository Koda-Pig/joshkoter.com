import style from '../styles/skipToContent.module.scss'

export default function SkipToContentBtn() {
  return (
    <a
      href="#main-content"
      role="navigation"
      className={style.skipToContent}
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  )
}
