import heroStyles from '../styles/hero.module.css'

export default function Hero() {
  return (
    <div className={heroStyles.hero}>
      <h1 className={heroStyles.heading}>Josh Koter</h1>
      <p className={heroStyles.subHeading}>Front-End Developer</p>
    </div>
  )
}
