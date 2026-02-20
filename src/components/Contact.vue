<script setup>
import Button from 'primevue/button'
</script>

<template>
  <section id="contact" class="bg-surface-50 px-6 py-20 md:px-12 lg:px-20">
    <div class="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
      <h2 class="text-surface-900 font-bold text-4xl leading-tight">
        Got a vision for AI in your business? Let's get something into production.
      </h2>
      <div class="flex flex-col md:flex-row items-center gap-4 mt-8">
        <a href="mailto:al@getitworking.ai?subject=AI%20for%20my%20business">
          <Button
            label="Email me"
            icon="pi pi-envelope"
            rounded
          />
        </a>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-4 mt-2">
        <a
          href="https://www.linkedin.com/in/albrayne/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary font-medium hover:underline ml-4"
        >
          Or message me on LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>
