import Navbar from '@/Components/Navbar/Navbar'
import NavbarContact from '@/Components/Navbar/NavbarContact'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <NavbarContact></NavbarContact>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </>
}
