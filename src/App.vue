<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ProblemSection from './components/ProblemSection.vue'
import WhatWeDo from './components/WhatWeDo.vue'
import About from './components/About.vue'
import Partners from './components/Partners.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const SHOW_PARTNERS = true
</script>

<template>
  <Header />
  <main>
    <Hero />
    <ProblemSection />
    <WhatWeDo />
    <About />
    <Partners v-if="SHOW_PARTNERS" />
    <Contact />
  </main>
  <Footer />
</template>
