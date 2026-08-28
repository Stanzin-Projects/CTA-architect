import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Craft', path: '/craft' },
  { name: 'Academics', path: '/academics' },
  { name: 'News', path: '/news' },
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

  const isHome = location.pathname === '/'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span
              className="text-[22px] tracking-[0.35em] font-semibold uppercase"
              style={{ fontFamily: 'Georgia, serif' }}
            >
             cta
            </span>
            <span
              className="text-[8px] tracking-[0.45em] uppercase -mt-0.5"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] tracking-wide transition-all duration-300 hover:opacity-60 ${
                  location.pathname === link.path
                    ? scrolled || !isHome ? 'text-stone-900 font-medium' : 'text-white font-medium'
                    : scrolled || !isHome ? 'text-stone-600' : 'text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              } ${scrolled || !isHome ? 'bg-stone-900' : 'bg-white'}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              } ${scrolled || !isHome ? 'bg-stone-900' : 'bg-white'}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        } bg-white/95 backdrop-blur-md`}
      >
        <div className="px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block text-sm tracking-wide transition-colors duration-300 ${
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
