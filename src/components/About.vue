<template>
  <section id="about" class="bg-white px-6 md:px-12 lg:px-20 py-20">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-20">
        <div class="w-full lg:w-1/2">
          <img
            src="/headshot.png"
            alt="Alastair Brayne"
            class="w-full rounded-3xl object-cover"
          />
        </div>
        <div class="w-full lg:w-1/2 flex flex-col gap-8">
          <div class="flex flex-col gap-4">
            <div class="px-4 py-2 bg-primary-50 rounded-full border border-primary-100 flex items-center gap-2 w-fit">
              <i class="pi pi-user text-primary-700 text-base" />
              <span class="text-primary-700 font-medium leading-normal">About</span>
            </div>
            <h2 class="text-2xl font-bold text-surface-900 leading-normal">About Alastair</h2>
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex items-start gap-4 p-2">
              <i class="pi pi-check-circle text-primary text-xl mt-1" />
              <div class="flex flex-col gap-1">
                <h3 class="text-base text-surface-900 font-medium leading-normal">Business experience</h3>
                <p class="text-base text-surface-500 leading-normal">
                  Four years running an AI startup. Product design, commercial strategy, engineering, fundraising, investor pressure, and teams.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-2">
              <i class="pi pi-check-circle text-primary text-xl mt-1" />
              <div class="flex flex-col gap-1">
                <h3 class="text-base text-surface-900 font-medium leading-normal">Building stuff</h3>
                <p class="text-base text-surface-500 leading-normal">
                  Twenty years of software development.
                  I'm hands-on with Claude, ChatGPT, MCP, and current AI SDKs and libraries.
                  With experienced development partners when the project needs it.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-2">
              <i class="pi pi-check-circle text-primary text-xl mt-1" />
              <div class="flex flex-col gap-1">
                <h3 class="text-base text-surface-900 font-medium leading-normal">AI-enabled dog-fooding</h3>
                <p class="text-base text-surface-500 leading-normal">
                  I work with AI agents extensively in my own practice too.
                  I've been developing with LLMs, sleeves-rolled-up, since the launch of ChatGPT, and through multiple agentic stacks since.
                  With old-school developer experience under the belt, it's less "vibe-coding" and more orchestrated agent engineering.
                  You get higher impact in a shorter timeframe.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-2">
              <i class="pi pi-check-circle text-primary text-xl mt-1" />
              <div class="flex flex-col gap-1">
                <h3 class="text-base text-surface-900 font-medium leading-normal">Human insight</h3>
                <p class="text-base text-surface-500 leading-normal">
                  I'm also a qualified psychotherapist, which influences how I design agent interactions and how I think about your users.
                  Large language models were trained on human language too.
                  Having a background in human behaviour gives me a different angle on how to guide and direct agents and human-agent interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
