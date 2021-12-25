import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ReactPlayer from 'react-player/lazy'
import homeStyles from '../styles/Home.module.css'
import WeatherApp from '../components/WeatherApp'
import Quote from '../components/Quote'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Contact from '../components/Contact'
import Form from '../components/Form'
import EasterEgg from '../components/EasterEgg'
import JoshKoterPic from '../public/JoshKoter.jpg'
import AudioVisualiserWebm from '../public/audio-visualiser.webm'
import AudioVisualiserMp4 from '../public/audio-visualiser.mp4'
import WhenPigsFlyWebm from '../public/when-pigs-fly.webm'
import WhenPigsFlyMp4 from '../public/when-pigs-fly.mp4'
import KnightOfCupsWebm from '../public/knight-of-cups.webm'
import KnightOfCupsMp4 from '../public/knight-of-cups.mp4'

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Koter | Front-End Developer</title>
        <meta name="description" content="Josh Koter's personal website and portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <EasterEgg />
      
      <div className={homeStyles.homePage}>

        <Hero id='home' />

        <div className={homeStyles.blurb}>
          <Image
            src={JoshKoterPic}
            alt="Picture of Josh Koter"
            className={homeStyles.profilePic}
            width={225}
            height={225}
          />
          <Quote />
        </div>

        <Intro />

        <div className={homeStyles.projects}>
          <div className={homeStyles.project}>
            <h3 id='weather-app'>Weather App</h3>
            <p>
              A weather app that uses the Geolocation API. Type a city name and hit &apos;Enter&apos; to see it in action, or simply use the &apos;Get Device Location&apos; button - you&apos;ll have to allow location access when you&apos;re prompted for this to work.
            </p>
            <WeatherApp w='500' h='500'/>
          </div>

          <div className={homeStyles.project}>
            <h3 id='audio-visualiser'>Audio Visualiser</h3>
            <p>
              An audio visualiser that responds to microphone input. <Link href='https://playground.joshkoter.com/audio-visualiser/' passHref><a>Click this link</a></Link>, then allow microphone access and speak into your mic or play some music to see it in action. This project was inspired by Frank over at <Link href='https://www.youtube.com/c/Frankslaboratory' passHref><a>Franks Laboratory</a></Link>.
            </p>
            <Link href='https://playground.joshkoter.com/audio-visualiser/' passHref>
              <a>
                <ReactPlayer
                  muted={true}
                  playing={true}
                  loop={true}
                  url={[
                    {src: AudioVisualiserWebm, type: 'video/webm'},
                    {src: AudioVisualiserMp4, type: 'video/mp4'}
                  ]}
                  width='100%'
                  height='auto'
                />
              </a>
            </Link>
          </div>

          <div className={homeStyles.project}>
            <h3 id='when-pigs-fly'>When Pigs Fly Game</h3>
            <p>
              A game built using the HTML <code>&lt;canvas&gt;</code> element. I love pigs so I chose this lovely little hog and added some wings to turn it into an animated character. To play; <Link href='https://playground.joshkoter.com/when-pigs-fly/' passHref><a>click this link</a></Link>, then shoot the pigs before they disappear off the canvas. Let me know what your highscore was! Credit for the background image goes to <Link href='https://www.vecteezy.com/free-vector/jungle-background' passHref><a>nightwolfdezines</a></Link>.
            </p>
            <Link href='https://playground.joshkoter.com/when-pigs-fly/' passHref>
              <a>
                <ReactPlayer
                  muted={true}
                  playing={true}
                  loop={true}
                  url={[
                    {src: WhenPigsFlyWebm, type: 'video/webm'},
                    {src: WhenPigsFlyMp4, type: 'video/mp4'}
                  ]}
                  width='100%'
                  height='auto'
                />
              </a>
            </Link>
          </div>

          <div className={homeStyles.project}>
            <h3 id='knight-of-cups'>Knight of Cups Game</h3>
            <p>
              Another game built with the <code>&lt;canvas&gt;</code> element. I used characters from two of my favourite 2D games <Link href='https://store.steampowered.com/app/268910/Cuphead/' passHref><a>Cuphead</a></Link> and <Link href='https://store.steampowered.com/app/367520/Hollow_Knight/' passHref><a>Hollow Knight</a></Link>. To play; <Link href='https://playground.joshkoter.com/knight-of-cups/' passHref><a>click this link</a></Link>, then use the arrow keys on your keyboard to control Cuphead and avoid touching the jellyfish. Credit for all game assets goes to <Link href='https://www.spriters-resource.com/' passHref><a>The Spriters Resource</a></Link>.
            </p>
            <Link href='https://playground.joshkoter.com/knight-of-cups/' passHref>
              <a>
                <ReactPlayer
                  muted={true}
                  playing={true}
                  loop={true}
                  url={[
                    {src: KnightOfCupsWebm, type: 'video/webm'},
                    {src: KnightOfCupsMp4, type: 'video/mp4'}
                  ]}
                  width='100%'
                  height='auto'
                />
              </a>
            </Link>
          </div>
        </div>

        <div className={homeStyles.contact}>
          <Contact />
          <Form />
        </div>
        
      </div>
    </>
  )
}