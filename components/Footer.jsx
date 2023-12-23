import style from '../styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <h3>Disclaimer</h3>
      <p>
        All of these projects are made for fun or experimentation. None of them
        are for profit. All assets used in these projects are open source, save
        for the soundtrack for the stick-hero game which is free to use as per{' '}
        <a
          href="https://store.steampowered.com/app/776560/Heartbound__OST/"
          target="_blank"
          rel="noreferrer"
        >
          Heartbound&apos;s steam page
        </a>
        .
      </p>
      <p>© Josh Koter</p>
    </footer>
  )
}
