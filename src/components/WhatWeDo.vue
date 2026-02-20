<template>
  <!-- 4a: Product Offering — White bg, centered header + 3-card grid -->
  <section id="whatwedo" class="bg-white px-6 md:px-12 lg:px-20 py-20">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-5xl font-semibold text-center leading-tight mb-4">
        Let's get something in production.
      </h2>
      <p class="text-xl text-surface-600 text-center mb-8">
        Not a slide deck.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 bg-surface-50 rounded-xl border border-surface-100">
          <span class="w-12 h-12 bg-surface-900 flex items-center justify-center rounded-md mb-6">
            <i class="pi pi-sync text-xl text-white"/>
          </span>
          <h3 class="text-surface-900 text-lg font-semibold leading-tight mb-3">Integrations Vs. Agents</h3>
          <p class="text-surface-600 text-base leading-normal">
            ChatGPT and Claude integrations that fit your operations.
            In-house AI agents handling real work.
            Initial production experiments that prove this technology belongs in your business.
          </p>
        </div>
        <div class="p-6 bg-surface-50 rounded-xl border border-surface-100">
          <span class="w-12 h-12 bg-surface-900 flex items-center justify-center rounded-md mb-6">
            <i class="pi pi-compass text-xl text-white"/>
          </span>
          <h3 class="text-surface-900 text-lg font-semibold leading-tight mb-3">Critical Path Deliverables</h3>
          <p class="text-surface-600 text-base leading-normal">
            Understanding immediate and deferrable priorities;
            Some visions are totally achievable right now, while some may unlock next week. Knowing the difference matters more than chasing hype.
          </p>
        </div>
        <div class="p-6 bg-surface-50 rounded-xl border border-surface-100">
          <span class="w-12 h-12 bg-surface-900 flex items-center justify-center rounded-md mb-6">
            <i class="pi pi-arrow-right text-xl text-white"/>
          </span>
          <h3 class="text-surface-900 text-lg font-semibold leading-tight mb-3">Positioned For What's Next</h3>
          <p class="text-surface-600 text-base leading-normal">
            The LLM ecosystem is moving fast. Getting a foot in the door positions you to move quickly when the next capability lands.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 4b: Commercial Clarity — Warm bg, 2-column + cards + callout -->
  <section class="bg-primary-50 px-6 md:px-12 lg:px-20 py-20">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-5xl font-semibold text-center leading-tight mb-8">
        Commercial clarity, built in.
      </h2>

      <!-- 3 cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div class="p-6 bg-white rounded-xl border border-primary-100 text-center">
          <h3 class="text-surface-900 text-lg font-semibold leading-tight mb-2">What's achievable now</h3>
          <p class="text-surface-600 text-sm leading-normal">Clear assessment of what you can ship today.</p>
        </div>
        <div class="p-6 bg-white rounded-xl border border-primary-100 text-center">
          <h3 class="text-surface-900 text-lg font-semibold leading-tight mb-2">What's worth investing in next</h3>
          <p class="text-surface-600 text-sm leading-normal">Prioritised roadmap for your next moves.</p>
        </div>
        <div class="p-6 bg-white rounded-xl border border-primary-100 text-center">
          <h3 class="text-surface-900 text-lg font-semibold leading-tight mb-2">What to leave alone</h3>
          <p class="text-surface-600 text-sm leading-normal">Honest advice on where not to spend.</p>
        </div>
      </div>

      <!-- Two-column: prose left, impact blocks right -->
      <div class="flex flex-col lg:flex-row gap-12 items-start mb-12">
        <div class="flex-1">
          <p class="text-lg text-surface-700 leading-relaxed">
            A working implementation answers the technical question.
          </p>
          <p class="text-lg text-surface-700 leading-relaxed mt-4">
            You also need to walk into the next board meeting or investor conversation with a clear picture:
          </p>
        </div>
        <div class="flex-1 flex flex-col gap-4">
          <div class="text-2xl font-bold text-surface-900 py-3 border-l-4 border-primary pl-4">
            What this cost
          </div>
          <div class="text-2xl font-bold text-surface-900 py-3 border-l-4 border-primary pl-4">
            What it proved
          </div>
          <div class="text-2xl font-bold text-surface-900 py-3 border-l-4 border-primary pl-4">
            Where it leads
          </div>
        </div>
      </div>

      <!-- Intro text -->
      <p class="text-lg text-surface-600 text-center my-8">
        I help you build the roadmap alongside the product.
      </p>

      <!-- Salient callout -->
      <div class="max-w-3xl mx-auto text-center py-8">
        <p class="text-2xl md:text-3xl font-semibold text-surface-900 leading-snug">
          The goal is practical implementation, future clarity for you, and confidence for the people holding the purse strings.
        </p>
      </div>
    </div>
  </section>

  <!-- 4c: Your Team — Dark bg, reverse 2-column -->
  <section class="bg-surface-900 px-6 md:px-12 lg:px-20 py-20">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-5xl font-bold text-white text-center mb-12 leading-tight">
        Your team, confident with AI.
      </h2>

      <!-- Reverse 2-column: blocks left, prose right -->
      <div class="flex flex-col lg:flex-row gap-12 items-start">
        <div class="flex-1 flex flex-col gap-3">
          <div class="flex items-center gap-4 p-4 bg-surface-800 rounded-lg">
            <i class="pi pi-check text-primary text-xl"/>
            <span class="text-white text-lg font-medium">Practical</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-surface-800 rounded-lg">
            <i class="pi pi-shield text-primary text-xl"/>
            <span class="text-white text-lg font-medium">No-hype</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-surface-800 rounded-lg">
            <i class="pi pi-bullseye text-primary text-xl"/>
            <span class="text-white text-lg font-medium">Outcome-focused</span>
          </div>
        </div>
        <div class="flex-1">
          <p class="text-lg text-gray-400 leading-relaxed">
            Already have people, devs or non-technical, who could be using AI more effectively?
          </p>
          <p class="text-lg text-gray-400 leading-relaxed mt-4">
            Practical, no-hype training that gets your existing team working with AI tools in their own roles.
          </p>
        </div>
      </div>

      <!-- Salient callout -->
      <div class="max-w-3xl mx-auto text-center py-8 mt-8">
        <p class="text-2xl md:text-3xl font-semibold text-white leading-snug">
          Same philosophy:
        </p>
        <p class="text-2xl md:text-3xl font-semibold text-white leading-snug mt-2">
          Honest, outcome-focused, built around what your business actually needs.
        </p>
      </div>
    </div>
  </section>
</template>
