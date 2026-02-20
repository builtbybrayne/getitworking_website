<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from 'primevue/button'

const scrolled = ref(false)
const handleScroll = () => { scrolled.value = window.scrollY > 50 }

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const handleCTAClick = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'bg-white/95 border-b border-gray-100 shadow-sm' : 'bg-transparent']">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <span :class="['text-xl font-semibold transition-colors duration-300', scrolled ? 'text-surface-900' : 'text-white']">GetItWorking.ai</span>
      <Button label="Let's talk" rounded @click="handleCTAClick" />
    </div>
  </header>
</template>
