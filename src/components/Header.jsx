import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 border-b border-gray-100 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-semibold">getitworking.ai</span>
        <button
          onClick={handleCTAClick}
          className="bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 px-5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2"
        >
          Let's talk
        </button>
      </div>
    </header>
  )
}
