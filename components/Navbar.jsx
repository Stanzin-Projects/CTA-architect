import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span className={`text-lg tracking-[0.3em] font-medium uppercase transition-colors duration-500 ${
              scrolled ? 'text-stone-900' : 'text-white'
            }`}>
              Field
            </span>
            <span className={`text-[10px] tracking-[0.25em] uppercase transition-colors duration-500 ${
              scrolled ? 'text-stone-500' : 'text-white/70'
            }`}>
              Architects
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-60 ${
                  location.pathname === link.path
                    ? scrolled ? 'text-stone-900 border-b border-stone-900 pb-0.5' : 'text-white border-b border-white pb-0.5'
                    : scrolled ? 'text-stone-600' : 'text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-[3.5px]' : ''
            } ${scrolled ? 'bg-stone-900' : 'bg-white'}`} />
            <span className={`block w-6 h-px transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
            } ${scrolled ? 'bg-stone-900' : 'bg-white'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-80' : 'max-h-0'
        } bg-white/95 backdrop-blur-md`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-stone-900 font-medium'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
