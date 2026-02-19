export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="sr-only">Get in Touch</h2>
        <p className="text-xl leading-relaxed text-gray-800 mb-12">
          If AI is on your mind and you're not sure where to start, that's
          exactly the conversation I'm here for.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:al@getitworking.ai?subject=AI%20for%20my%20business"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 w-full md:w-auto text-center"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/albrayne/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 underline hover:text-gray-800 transition-colors w-full md:w-auto text-center"
          >
            Or message me on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
