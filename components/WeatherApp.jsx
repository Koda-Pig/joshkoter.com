export default function WeatherApp({ w, h }) {
  return (
    <iframe
      width={w}
      height={h}
      src="https://weatherapp.joshkoter.com/"
      title="Simple weather app"
      allow="geolocation"
    ></iframe>
  )
}
