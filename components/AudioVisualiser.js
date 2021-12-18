export default function AudioVisualiser({w, h}) {
  return (
    <iframe
      width={w}
      height={h}
      src='https://playground.joshkoter.com/audio-visualiser/'
      title="Simple weather app" 
      allow='microphone'
    >
    </iframe>
  )
}