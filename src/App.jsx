import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import WhatWeDo from './components/WhatWeDo'
import About from './components/About'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SHOW_PARTNERS = true

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <WhatWeDo />
        <About />
        {SHOW_PARTNERS && <Partners />}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
