import SkipToContentBtn from '../components/SkipToContentBtn'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout({ children }) {
  return (
    <>
      <SkipToContentBtn />
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  )
}
