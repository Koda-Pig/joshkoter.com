import style from '../styles/quote.module.css'
import { useState } from 'react'

export default function Quote() {

  let quotes = [
    {
      "content": "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn.",
      "author": "Alvin Toffler"
    },
    {
      "content": "I have never met a man so ignorant that I couldn't learn something from him.",
      "author": "Galileo Galilei"
    },
    {
      "content": "Not only is the Universe stranger than we think, it is stranger than we can think.",
      "author": "Werner Heisenberg"
    },
  ]

  const [quote, setQuote] = useState(quotes[0])

  return (
    <div
      className={style.quote}
      onClick={
        () => setQuote(quotes[(Math.floor(Math.random() * quotes.length))])
      }
    >
      <p>
        <em>“{quote.content}”</em><br/>
        ~<br />
        {quote.author}
      </p>
    </div>
  )
}