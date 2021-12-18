import Head from 'next/head'
import Image from 'next/image'
import JoshKoter from '../public/JoshKoter.jpg'
import homeStyles from '../styles/home.module.css'
import WeatherApp from '../components/WeatherApp'
import AudioVisualiser from '../components/AudioVisualiser'
import WhenPigsFly from '../components/WhenPigsFly'
import KnightOfCups from '../components/KnightOfCups'
import Link from 'next/link'

const webYears = new Date().getFullYear() - 2016;

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Koter  Front-End Developer</title>
        <meta name="description" content="Josh Koter's personal website and portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={homeStyles.hero}>
        <h1 className={homeStyles.heading}>Josh Koter</h1>
        <p className={homeStyles.subHeading}>Front-End Developer</p>
      </div>
      <div className={homeStyles.blurb}>
        <Image
          src={JoshKoter}
          alt="Picture of Josh Koter"
          className={homeStyles.profilePic}
        />
        <div>
          <p>
            Hi there! I've been involved in web development since 2016, when I moved from browsing the web to trying to figure out how it works. It's been {webYears} years and I realise that I'll never understand it completely, but that's what keeps me hooked. The web is always changing, always growing, and (for the most part) constantly improving.
          </p>
          <p>
            Below are a few recent projects I've made. They were all built without frameworks and use only vanilla Javascript.
          </p>
        </div>
      </div>
      <div className={homeStyles.project}>
        <h3>Weather App</h3>
        <p>
          A simple weather app that makes use of the Geolocation API. To use the 'Get Device Location' button, please allow geolocation when you are prompted.
        </p>
        <WeatherApp w='800' h='600'/>
      </div>
      <div className={homeStyles.project}>
        <h3>Audio Visualiser</h3>
        <p>
          An audio visualiser that responds to microphone input. Allow this site to use your microphone when prompted to see it in action. This project was inspired by Frank over at <Link href='https://www.youtube.com/c/Frankslaboratory' passHref><a>Franks Laboratory</a></Link>.
        </p>
        <AudioVisualiser w='800' h='600'/>
      </div>
      <div className={homeStyles.project}>
        <h3>When Pigs Fly Game</h3>
        <p>
          A game built using the HTML <code>&lt;canvas&gt;</code> element. To play; click on the pigs before they disappear off the canvas. Credit for the background image goes to <Link href='https://www.vecteezy.com/free-vector/jungle-background' passHref><a>nightwolfdezines</a></Link>.
        </p>
        <WhenPigsFly w='800' h='600'/>
      </div>
      <div className={homeStyles.project}>
        <h3>Knight of Cups Game</h3>
        <p>
          Also built using the HTML <code>&lt;canvas&gt;</code> element. To play; use the arrow keys to control CupHead and avoid touching the jellyfish. Credit for all game assets goes to <Link href='https://www.spriters-resource.com/' passHref><a>The Spriters Resource</a></Link>.
        </p>
        <KnightOfCups w='800' h='600'/>
      </div>
    </>
  )
}