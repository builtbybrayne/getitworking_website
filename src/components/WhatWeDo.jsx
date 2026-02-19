export default function WhatWeDo() {
  return (
    <section id="whatwedo" className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="sr-only">What We Do</h2>
        <div className="space-y-16 md:space-y-20">

          {/* Block 1: Product Offering */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Let's get something in production. Not a slide deck.
            </h3>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Your business could have ChatGPT and Claude integrations that actually fit your operations. AI agents handling real work. Initial production experiments that prove this technology belongs in your business, not just on your wish list.
              </p>
              <p className="text-lg leading-relaxed">
                We start by understanding what's a priority today, for your specific situation. Some visions are totally achievable right now. Some require budgets or teams that may be out of reach. Some may unlock next week. Knowing the difference matters more than chasing hype. Plenty of people will build you a prototype that demos well and goes nowhere. The target is to build something that works in production now.
              </p>
              <p className="text-lg leading-relaxed">
                The LLM ecosystem is young and moving fast. Getting a foot in the door now isn't just about today's implementation. It's about being positioned to move quickly when the next capability lands. We help you build the thing, and we help you plan what comes next.
              </p>
            </div>
          </div>

          {/* Block 2: Commercial Clarity */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Your board will want to know why.
            </h3>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                A working implementation answers the technical question. But you also need to walk into the next board meeting or investor conversation with a clear picture: what this cost, what it proved, and where it leads.
              </p>
              <p className="text-lg leading-relaxed">
                We help you build the roadmap alongside the product. What's achievable now, what's worth investing in next, and what to leave alone. The goal is practical implementation, future clarity for you, and confidence for the people holding the purse strings.
              </p>
            </div>
          </div>

          {/* Block 3: Team Offering */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Your team, confident with AI.
            </h3>
            <p className="text-lg leading-relaxed">
              Already have people, devs or non-technical, who could be using AI more effectively? Practical, no-hype training that gets your existing team working with AI tools in their own roles. Same philosophy: honest, outcome-focused, built around what your business actually needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
