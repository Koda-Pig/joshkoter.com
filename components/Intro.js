import style from '../styles/intro.module.css'

export default function Intro() {
  const webYears = new Date().getFullYear() - 2016

  return (
    <div className={style.intro}>
      <p>
        Hi there! I&apos;ve been involved in web development since 2016, when I
        moved from browsing the web to trying to figure out how it works.
        It&apos;s been {webYears} years and I realise that I&apos;ll never
        understand it completely, but that&apos;s what keeps me hooked. The web
        is always changing, always growing, and (for the most part) constantly
        improving. As a knowledge hog, what better field is there to be involved
        in?
      </p>
      <p>
        Below are a few recent projects I&apos;ve made to show off my skills.
        They were all built without frameworks and use only vanilla Javascript.
      </p>
    </div>
  )
}
