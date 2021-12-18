export default function WeatherApp({w, h}) {
  return (
    <iframe
      width={w}
      height={h}
      src='https://playground.joshkoter.com/weather-app/'
      title="Simple weather app" 
      allow='geolocation'
    >
    </iframe>
  )
}