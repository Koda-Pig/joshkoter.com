import style from '../styles/quote.module.scss'
import { useState } from 'react'

export default function Quote() {
  const quotes = [
      {
        index: 0,
        content:
          'The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn.',
        author: 'Alvin Toffler'
      },
      {
        index: 1,
        content:
          "I have never met a man so ignorant that I couldn't learn something from him.",
        author: 'Galileo Galilei'
      },
      {
        index: 2,
        content:
          'Not only is the Universe stranger than we think, it is stranger than we can think.',
        author: 'Werner Heisenberg'
      },
      {
        index: 3,
        content:
          "What Orwell failed to predict is that we'd buy the cameras ourselves, and that our biggest fear would be that nobody was watching.",
        author: 'Keith Jensen'
      },
      {
        index: 4,
        content:
          'Be curious. Read widely. Try new things. What people call intelligence just boils down to curiosity.',
        author: 'Aaron Swartz'
      },
      {
        index: 5,
        content:
          'When exposing a crime is treated as committing a crime, you are being ruled by criminals.',
        author: 'Edward Snowden'
      },
      {
        index: 6,
        content:
          "When a child is given a marker, it's first instinct is not to draw on paper, but to draw on it's own skin. Self-creation and self-recreation is one of our deepest drives.",
        author: 'Shannon Larratt'
      },
      {
        index: 7,
        content:
          'Do unto others 20% better than you would expect them to do unto you, to correct for subjective error.',
        author: 'Linus Pauling'
      }
    ],
    [quote, setQuote] = useState(quotes[0])

  return (
    <div
      className={style.quote}
      title="click for another"
      onClick={() => {
        if (quote.index >= quotes.length - 1) setQuote(quotes[0])
        else setQuote(quotes[quote.index + 1])
      }}
    >
      <p>
        <em>“{quote.content}”</em>
        <br />
        ~<br />
        {quote.author}
      </p>
    </div>
  )
}
