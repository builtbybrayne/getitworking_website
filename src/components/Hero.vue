<script setup>
import Button from 'primevue/button'

const handleCTAClick = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="bg-surface-900 pt-24 pb-12 px-12 lg:pt-28 lg:pb-20 lg:px-20">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-wrap lg:flex-row flex-col-reverse gap-12 items-center">
        <div class="flex-1 p-4">
          <h1 class="text-5xl font-bold text-white mb-4 leading-tight">
            Get <span class="text-primary underline">AI agents</span> and <span class="text-primary underline">ChatGPT integrations</span> working for your business.
          </h1>
          <ul class="list-none flex flex-col gap-4 mt-8">
            <li class="flex items-center gap-2">
              <i class="pi pi-check-circle text-primary text-xl" />
              <span class="text-gray-400 leading-normal">ChatGPT/Claude integrations</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-cog text-primary text-xl" />
              <span class="text-gray-400 leading-normal">In-house AI agents</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-users text-primary text-xl" />
              <span class="text-gray-400 leading-normal">Team training</span>
            </li>
          </ul>
          <Button label="Let's talk" rounded size="large" class="mt-12" @click="handleCTAClick" />
        </div>
        <div class="flex-1 text-center lg:text-right overflow-hidden">
          <svg viewBox="0 0 400 300" class="w-full max-w-md lg:w-auto lg:max-w-xl mx-auto" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" class="[stop-color:var(--p-primary-500)]" stop-opacity="0.3" />
                <stop offset="100%" class="[stop-color:var(--p-primary-500)]" stop-opacity="0.05" />
              </linearGradient>
            </defs>
            <rect x="40" y="30" width="120" height="80" rx="12" fill="url(#grad1)" stroke="currentColor" class="text-primary" stroke-width="1" stroke-opacity="0.3" />
            <rect x="200" y="60" width="160" height="100" rx="12" fill="url(#grad1)" stroke="currentColor" class="text-primary" stroke-width="1" stroke-opacity="0.3" />
            <rect x="80" y="140" width="140" height="90" rx="12" fill="url(#grad1)" stroke="currentColor" class="text-primary" stroke-width="1" stroke-opacity="0.3" />
            <circle cx="100" cy="70" r="20" fill="none" stroke="currentColor" class="text-primary" stroke-width="1" stroke-opacity="0.4" />
            <circle cx="280" cy="110" r="30" fill="none" stroke="currentColor" class="text-primary" stroke-width="1" stroke-opacity="0.4" />
            <circle cx="150" cy="185" r="15" fill="none" stroke="currentColor" class="text-primary" stroke-width="1" stroke-opacity="0.4" />
            <line x1="120" y1="70" x2="200" y2="90" stroke="currentColor" class="text-primary" stroke-width="0.5" stroke-opacity="0.3" />
            <line x1="220" y1="140" x2="180" y2="160" stroke="currentColor" class="text-primary" stroke-width="0.5" stroke-opacity="0.3" />
            <line x1="250" y1="110" x2="165" y2="185" stroke="currentColor" class="text-primary" stroke-width="0.5" stroke-opacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
