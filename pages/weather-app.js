import Head from 'next/head'
import WeatherApp from '../components/WeatherApp'

export default function WeatherAppPage() {
  return (
    <>
      <Head>
        <title>Josh Koter | Front-End Developer</title>
        <meta name="description" content="Josh Koter's personal website and portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WeatherApp w='100%' h='700'/>
    </>
  )
}
