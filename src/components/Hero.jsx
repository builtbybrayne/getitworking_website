export default function Hero() {
  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-40 pb-16 md:pb-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Get AI agents and ChatGPT integrations working for your business.
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-12">
          ChatGPT/Claude integrations. AI agents. Team training.
        </p>
        <button
          onClick={handleCTAClick}
          className="bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 w-full md:w-auto"
        >
          Let's talk
        </button>
      </div>
    </section>
  )
}
