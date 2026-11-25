import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import MenuSection from './components/sections/MenuSection'
import Features from './components/sections/Features'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import Location from './components/sections/Location'
import Contact from './components/sections/Contact'
import { ui } from './data/content'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#konten-utama">
        {ui.skipToContent}
      </a>

      <Navbar />

      <main id="konten-utama">
        <Hero />
        <About />
        <MenuSection />
        <Features />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
