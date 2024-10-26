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
        Hi! My journey in web development began in 2016, when I transitioned
        from browsing the web to discovering how it works behind the scenes.{' '}
        {yearsToString(webYears)} years later, I&apos;m still captivated by the
        field&apos;s ever-evolving nature, and I love that there&apos;s always
        something new to learn.
      </p>
      <p>
        I specialize in frontend development, with a focus on CSS, HTML,
        JavaScript, TypeScript, SCSS, Node.js, Next.js, and React.
      </p>
      <p>Below are a few projects I&apos;ve built.</p>
    </div>
  )
}
