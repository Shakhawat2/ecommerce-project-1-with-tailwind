import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import NavbarContact from '@/Components/Navbar/NavbarContact'
import ScrollYProgress from '@/MotionAnimation/ScrollYProgress'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <ScrollYProgress></ScrollYProgress>
    <NavbarContact></NavbarContact>
    <Navbar></Navbar>
    <Component {...pageProps} />
    <Footer></Footer>
  </>
}
