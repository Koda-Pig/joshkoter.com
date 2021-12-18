import quoteStyles from '../styles/quote.module.css'

export default function Footer() {
  return (
    <div className={quoteStyles.quote}>
      <p>
        <em>“The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn.”</em><br />
        ~<br />
        Alvin Toffler
      </p>
    </div>
  )
}
