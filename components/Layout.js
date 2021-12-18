import Navbar from '../components/NavBar'
import Footer from './Footer'
import ParticleBackground from './ParticleBackground'


const Layout = ({children}) => {
  return (
    <>
    <ParticleBackground />
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default Layout