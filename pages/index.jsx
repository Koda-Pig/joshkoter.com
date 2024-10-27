import Head from 'next/head'
import Image from 'next/image'
import ReactPlayer from 'react-player/lazy'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import style from '../styles/home.module.scss'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import About from '../components/About'
import Quote from '../components/Quote'
import Contact from '../components/Contact'
import EasterEgg from '../components/EasterEgg'
import WeatherApp from '../components/WeatherApp'
import JoshKoterPic from '../public/JoshKoter.png'
import LisaWebsite from '../components/LisaWebsite'
import WhenPigsFlyMp4 from '../public/when-pigs-fly.mp4'
import KnightOfCupsMp4 from '../public/knight-of-cups.mp4'
import AudioVisualiserMp4 from '../public/audio-visualiser.mp4'
import StickHeroTributeMp4 from '../public/stick-hero-tribute.mp4'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Personal website and portfolio." />
        <meta name="theme-color" content="#2196f3" />
        <title>Josh Koter | Frontend Developer</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" href="icon-192x192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* eslint-disable-next-line */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin+Condensed&family=Nunito:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <EasterEgg />

      <main className={style.homePage} id="main-content" tabIndex="0">
        <Hero id="home" />

        <Intro />

        <div className={style.projects}>
          <div className={style.project}>
            <a
              href="https://lisapottery.co.za/"
              target="_blank"
              rel="noreferrer"
              className={style.link}
            >
              <h3 id="lisa-website">Lisa Liebermann&apos;s website</h3>
            </a>
            <p>
              Website for ceramic artist Lisa Liebermann, designed by{' '}
              <a
                href="https://aadilachand.com/"
                target="_blank"
                rel="noreferrer"
              >
                Aadila Chand
              </a>{' '}
              on Figma. This Next.js project uses TypeScript and SASS, and is
              deployed with Netlify.
            </p>

            <LisaWebsite w="500" h="500" />
          </div>
          <div className={style.project}>
            <a
              href="https://weatherapp.joshkoter.com/"
              target="_blank"
              rel="noreferrer"
              className={style.link}
            >
              <h3 id="weather-app">Weather App</h3>
            </a>
            <p>
              A weather app that uses the Geolocation API. Type a city name and
              hit &apos;Enter&apos; to see it in action, or simply use the
              &apos;Get Device Location&apos; button - you&apos;ll have to allow
              location access when you&apos;re prompted for this to work.
            </p>
            <WeatherApp w="500" h="500" />
          </div>

          <div className={style.project}>
            <a
              href="https://playground.joshkoter.com/audio-visualiser/"
              className={style.link}
              target="_blank"
              rel="noreferrer"
            >
              <h3 id="audio-visualiser">Audio Visualiser</h3>
            </a>
            <p>
              An audio visualiser that responds to microphone input.{' '}
              <a
                href="https://playground.joshkoter.com/audio-visualiser/"
                target="_blank"
                rel="noreferrer"
              >
                Click this link
              </a>
              , then allow microphone access and speak into your mic or play
              some music to see it in action. This project was inspired by Frank
              over at{' '}
              <a
                href="https://www.youtube.com/c/Frankslaboratory"
                target="blank"
                rel="noreferrer"
              >
                Franks Laboratory
              </a>
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
            <a
              href="https://stick-hero.joshkoter.com/"
              target="blank"
              rel="noreferrer"
              className={style.link}
            >
              <h3 id="stick-hero-tribute">Stick Hero Tribute</h3>
            </a>
            <p>
              My first mobile-friendly game, inspired by the{' '}
              <a
                href="https://ketchapp-stick-hero.en.aptoide.com/app"
                target="_blank"
                rel="noreferrer"
              >
                Stick Hero game from KetchApp
              </a>
              . Javascript implementation inspired by this{' '}
              <a
                href="https://www.freecodecamp.org/news/javascript-game-tutorial-stick-hero-with-html-canvas/#the-stick-hero-game"
                target="_blank"
                rel="noreferrer"
              >
                tutorial
              </a>
              . Credit for character sprites goes to{' '}
              <a
                href="https://www.spriters-resource.com/"
                target="blank"
                rel="noreferrer"
              >
                The Spriters Resource
              </a>
              . Credit for the background images goes to{' '}
              <a
                href="https://opengameart.org/content/horizontal-2d-backgrounds"
                target="_blank"
                rel="noreferrer"
              >
                CraftPix.net 2D Game Assets
              </a>
              . This soundtrack is from{' '}
              <a href="https://store.steampowered.com/app/567380/Heartbound/">
                Heartbound
              </a>
              , a game by Pirate Software.
            </p>
            <ReactPlayer
              muted={true}
              loop={true}
              className={style.video}
              url={StickHeroTributeMp4}
              type="video/mp4"
              width="100%"
              height="100%"
              controls
              playing
              light="/stick-hero.webp"
              playIcon={<BsFillPlayCircleFill className={style.playIcon} />}
            />
          </div>

          <div className={style.project}>
            <a
              href="https://playground.joshkoter.com/when-pigs-fly/"
              target="blank"
              rel="noreferrer"
              className={style.link}
            >
              <h3 id="when-pigs-fly">When Pigs Fly Game</h3>
            </a>
            <p>
              A game built using the HTML <code>&lt;canvas&gt;</code> element. I
              love pigs so I chose this lovely little hog and added some wings
              to turn it into an animated character. To play;{' '}
              <a
                href="https://playground.joshkoter.com/when-pigs-fly/"
                target="blank"
                rel="noreferrer"
              >
                click this link
              </a>
              , then shoot the pigs before they disappear off the canvas. Let me
              know what your highscore was! Credit for the background image goes
              to{' '}
              <a
                href="https://www.vecteezy.com/free-vector/jungle-background"
                target="blank"
                rel="noreferrer"
              >
                nightwolfdezines
              </a>
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
            <a
              href="https://playground.joshkoter.com/knight-of-cups/"
              target="blank"
              rel="noreferrer"
              className={style.link}
            >
              <h3 id="knight-of-cups">Knight of Cups Game</h3>
            </a>
            <p>
              Another game built with the <code>&lt;canvas&gt;</code> element. I
              used characters from two of my favourite 2D games{' '}
              <a
                href="https://store.steampowered.com/app/268910/Cuphead/"
                target="blank"
                rel="noreferrer"
              >
                Cuphead
              </a>{' '}
              and{' '}
              <a
                href="https://store.steampowered.com/app/367520/Hollow_Knight/"
                target="blank"
                rel="noreferrer"
              >
                Hollow Knight
              </a>
              . To play;{' '}
              <a
                href="https://playground.joshkoter.com/knight-of-cups/"
                target="blank"
                rel="noreferrer"
              >
                click this link
              </a>
              , then use the arrow keys on your keyboard to control Cuphead and
              avoid touching the jellyfish. Credit for all game assets goes to{' '}
              <a
                href="https://www.spriters-resource.com/"
                target="blank"
                rel="noreferrer"
              >
                The Spriters Resource
              </a>
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

        <div>
          <div className={style.blurb}>
            <Image
              src={JoshKoterPic}
              alt="Headshot of Josh Koter"
              className={style.profilePic}
              width={225}
              height={225}
              priority
            />
            <About />
          </div>
          <Quote />
        </div>

        <div className={style.contact}>
          <Contact />
        </div>
      </main>
    </>
  )
}
