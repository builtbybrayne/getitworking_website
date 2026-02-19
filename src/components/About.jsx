import headshot from '../assets/headshot.jpg'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-28 px-6 md:px-12 bg-amber-50/60">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-14">
          About Alastair
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          <div className="flex-shrink-0 self-center md:self-start">
            <img
              src={headshot}
              alt="Alastair Brayne, founder of getitworking.ai"
              loading="lazy"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover"
            />
          </div>
          <div className="max-w-prose">
            <p className="text-lg leading-relaxed mb-6">
              Four years running an AI startup. Fundraising, commercial strategy, product decisions, investor pressure. Twenty years of software development. I'm hands-on with Claude, ChatGPT, MCP, and current AI platforms.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              When I say something will work in production, I'm the one building it. With experienced development partners when the project needs it.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I work with AI agents extensively in my own practice. With years of engineering experience orchestrating these agents, this isn't "vibe-coding". You get higher impact in a shorter timeframe than traditional contract development.
            </p>
            <p className="text-lg leading-relaxed">
              I'm also a qualified psychotherapist. I understand what people actually want beneath what they say. That changes how I design agent interactions and how I think about your users. Large language models were trained on human expression. Having a background in human behaviour gives me a different angle on how agents engage with people. It's a perspective most developers don't bring to the table.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
