import Navbar from './NavBar'
import Footer from './Footer'
import ParticleBackground from './ParticleBackground'
import ScrollToTop from './ScrollToTop'

const Layout = ({children}) => {
  return (
    <>
    <ParticleBackground />
    <Navbar />
    {children}
    <Footer />
    <ScrollToTop />
    </>
  )
}

export default Layout