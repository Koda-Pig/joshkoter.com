import heroStyles from '../styles/hero.module.css'

export default function Hero() {
  return (
    <div className={heroStyles.hero}>
      <svg viewBox="0 0 100 20">
        <defs>
          <linearGradient id="gradient">
            <stop color="#fff"/>
          </linearGradient>
          <pattern id="wave" x="0" y="1" width="100%" height="100%" patternUnits="userSpaceOnUse">
            <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" fill="#fff"> 
              <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="1.5s"
                  type="translate"
                  from="0,0"
                  to="40,0"
                  repeatCount="indefinite" />
            </path>
          </pattern>
        </defs>
        <text textAnchor="middle" x="50" y="15" fontSize="17" fill="#c2fff9" fillOpacity="0.9">Josh Koter</text>
        <text textAnchor="middle" x="50" y="15" fontSize="17" fill="url(#wave)" fillOpacity="1">Josh Koter</text>
      </svg>
      <p className={heroStyles.subHeading}>Front-End Developer</p>
    </div>
  )
}
