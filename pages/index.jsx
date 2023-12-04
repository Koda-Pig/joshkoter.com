import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import ReactPlayer from 'react-player/lazy'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import style from '../styles/home.module.scss'
import Hero from '../components/Hero'
import Form from '../components/Form'
import Intro from '../components/Intro'
import Quote from '../components/Quote'
import Contact from '../components/Contact'
import EasterEgg from '../components/EasterEgg'
import WeatherApp from '../components/WeatherApp'
import JoshKoterPic from '../public/JoshKoter.jpg'
import WhenPigsFlyMp4 from '../public/when-pigs-fly.mp4'
import KnightOfCupsMp4 from '../public/knight-of-cups.mp4'
import AudioVisualiserMp4 from '../public/audio-visualiser.mp4'
import GoogleTagManager from '../components/GoogleTagManager'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Personal website and portfolio." />
        <meta name="theme-color" content="#2196f3" />
        <title>Josh Koter | Front-End Developer</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" href="icon-192x192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin+Condensed&family=Nunito:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <GoogleTagManager gtagId="G-4ML6BZSHFC" />
      </Head>

      <EasterEgg />

      <main className={style.homePage} id="main-content" tabIndex="0">
        <Hero id="home" />

        <div className={style.blurb}>
          <Image
            src={JoshKoterPic}
            alt="Headshot of Josh Koter"
            className={style.profilePic}
            width={225}
            height={225}
            priority
          />
          <Quote />
        </div>

        <Intro />

        <div className={style.projects}>
          <div className={style.project}>
            <Link href="https://weatherapp.joshkoter.com/" passHref>
              <a className={style.link}>
                <h3 id="weather-app">Weather App</h3>
              </a>
            </Link>
            <p>
              A weather app that uses the Geolocation API. Type a city name and
              hit &apos;Enter&apos; to see it in action, or simply use the
              &apos;Get Device Location&apos; button - you&apos;ll have to allow
              location access when you&apos;re prompted for this to work.
            </p>
            <WeatherApp w="500" h="500" />
          </div>

          <div className={style.project}>
            <Link
              href="https://playground.joshkoter.com/audio-visualiser/"
              passHref
            >
              <a className={style.link}>
                <h3 id="audio-visualiser">Audio Visualiser</h3>
              </a>
            </Link>
            <p>
              An audio visualiser that responds to microphone input.{' '}
              <Link
                href="https://playground.joshkoter.com/audio-visualiser/"
                passHref
              >
                <a>Click this link</a>
              </Link>
              , then allow microphone access and speak into your mic or play
              some music to see it in action. This project was inspired by Frank
              over at{' '}
              <Link href="https://www.youtube.com/c/Frankslaboratory" passHref>
                <a>Franks Laboratory</a>
              </Link>
              .
            </p>
            <ReactPlayer
              muted={true}
              loop={true}
              className={style.video}
              url={AudioVisualiserMp4}
              type="video/mp4"
              width="100%"
              height="100%"
              controls
              playing
              light="/audio-visualiser-thumb.webp"
              playIcon={<BsFillPlayCircleFill className={style.playIcon} />}
            />
          </div>

          <div className={style.project}>
            <Link
              href="https://playground.joshkoter.com/when-pigs-fly/"
              passHref
            >
              <a className={style.link}>
                <h3 id="when-pigs-fly">When Pigs Fly Game</h3>
              </a>
            </Link>
            <p>
              A game built using the HTML <code>&lt;canvas&gt;</code> element. I
              love pigs so I chose this lovely little hog and added some wings
              to turn it into an animated character. To play;{' '}
              <Link
                href="https://playground.joshkoter.com/when-pigs-fly/"
                passHref
              >
                <a>click this link</a>
              </Link>
              , then shoot the pigs before they disappear off the canvas. Let me
              know what your highscore was! Credit for the background image goes
              to{' '}
              <Link
                href="https://www.vecteezy.com/free-vector/jungle-background"
                passHref
              >
                <a>nightwolfdezines</a>
              </Link>
              .
            </p>
            <ReactPlayer
              muted={true}
              loop={true}
              className={style.video}
              url={WhenPigsFlyMp4}
              type="video/mp4"
              width="100%"
              height="100%"
              controls
              playing
              light="/when-pigs-fly-thumb.webp"
              playIcon={<BsFillPlayCircleFill className={style.playIcon} />}
            />
          </div>

          <div className={style.project}>
            <Link
              href="https://playground.joshkoter.com/knight-of-cups/"
              passHref
            >
              <a className={style.link}>
                <h3 id="knight-of-cups">Knight of Cups Game</h3>
              </a>
            </Link>
            <p>
              Another game built with the <code>&lt;canvas&gt;</code> element. I
              used characters from two of my favourite 2D games{' '}
              <Link
                href="https://store.steampowered.com/app/268910/Cuphead/"
                passHref
              >
                <a>Cuphead</a>
              </Link>{' '}
              and{' '}
              <Link
                href="https://store.steampowered.com/app/367520/Hollow_Knight/"
                passHref
              >
                <a>Hollow Knight</a>
              </Link>
              . To play;{' '}
              <Link
                href="https://playground.joshkoter.com/knight-of-cups/"
                passHref
              >
                <a>click this link</a>
              </Link>
              , then use the arrow keys on your keyboard to control Cuphead and
              avoid touching the jellyfish. Credit for all game assets goes to{' '}
              <Link href="https://www.spriters-resource.com/" passHref>
                <a>The Spriters Resource</a>
              </Link>
              .
            </p>
            <ReactPlayer
              muted={true}
              loop={true}
              className={style.video}
              url={KnightOfCupsMp4}
              type="video/mp4"
              width="100%"
              height="100%"
              controls
              playing
              light="/knight-of-cups-thumb.webp"
              playIcon={<BsFillPlayCircleFill className={style.playIcon} />}
            />
          </div>
        </div>

        <div className={style.contact}>
          <Contact />
          <Form />
        </div>
      </main>
    </>
  )
}
