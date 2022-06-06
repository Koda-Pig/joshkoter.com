import Navbar from './Navbar'
import Footer from './Footer'
import ParticleBackground from './ParticleBackground'
import ScrollToTop from './ScrollToTop'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
      <ParticleBackground />
    </>
  )
}
