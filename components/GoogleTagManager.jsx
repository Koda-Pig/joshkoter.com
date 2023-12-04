import { useEffect } from 'react'

export default function GoogleTagManager({ gtagId }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', gtagId)

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
    document.head.appendChild(script)
  }, [gtagId])

  return null
}
