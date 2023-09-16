import SkipToContentBtn from '../components/SkipToContentBtn'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ParticleBackground from './ParticleBackground'

export default function Layout({ children }) {
  return (
    <>
      <SkipToContentBtn />
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
      <ParticleBackground />
    </>
  )
}
