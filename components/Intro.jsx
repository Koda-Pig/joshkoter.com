import style from '../styles/intro.module.scss'

export default function Intro() {
  const webYears = new Date().getFullYear() - 2016
  const yearsToString = n =>
    [
      'Zero',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
      'Eleven',
      'Twelve',
      'Thirteen',
      'Fourteen',
      'Fifteen',
      'Sixteen',
      'Seventeen',
      'Eighteen',
      'Nineteen',
      'Twenty',
      'at this point you should really find a better way to do this',
    ][n]

  return (
    <div className={style.intro}>
      <p>
        Hi! I&apos;ve been passionate about web development since 2016,
        transitioning from simply browsing the web to exploring how it works.{' '}
        {yearsToString(webYears)} years later, I appreciate that there&apos;s
        always more to learn, which is what keeps me hooked. The web is
        constantly evolving and improving, making it an exciting field for
        someone who loves to learn new things.
      </p>
      <p>Below are a few recent projects I&apos;ve made.</p>
    </div>
  )
}
