import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  {
    name: 'About',
    path: '/about',
    children: [
      { name: 'Team', path: '/about' },
      { name: 'Journey', path: '/about/journey' },
    ],
  },
  { name: 'Projects', path: '/projects' },
  { name: 'Craft', path: '/craft' },
  { name: 'Academics', path: '/academics' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const location = useLocation()
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setHoveredLink(null)
  }, [location])

  const isHome = location.pathname === '/'

  const handleMouseEnter = (name) => {
    clearTimeout(timeoutRef.current)
    setHoveredLink(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredLink(null)
    }, 150)
  }

  const isLight = !scrolled && isHome

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
              className="text-[22px] tracking-[0.35em] font-semibold"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              CTA
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
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.path}
                  className={`text-[13px] tracking-wide transition-all duration-300 hover:opacity-60 ${
                    location.pathname === link.path || (link.children && link.children.some(c => location.pathname === c.path))
                      ? isLight ? 'text-white font-medium' : 'text-stone-900 font-medium'
                      : isLight ? 'text-white/80' : 'text-stone-600'
                  }`}
                >
                  {link.name}
                </Link>

                {/* Dropdown */}
                {link.children && hoveredLink === link.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white shadow-md rounded-sm py-2 min-w-[120px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`block px-4 py-2 text-[12px] tracking-wide transition-colors duration-200 ${
                            location.pathname === child.path
                              ? 'text-stone-900 font-medium'
                              : 'text-stone-500 hover:text-stone-900'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
              } ${isLight ? 'bg-white' : 'bg-stone-900'}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              } ${isLight ? 'bg-white' : 'bg-stone-900'}`}
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
            <div key={link.name}>
              <Link
                to={link.path}
                className={`block text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-stone-900 font-medium'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {link.name}
              </Link>
              {link.children && (
                <div className="ml-4 mt-2 space-y-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.path}
                      className={`block text-xs tracking-wide transition-colors duration-300 ${
                        location.pathname === child.path
                          ? 'text-stone-900 font-medium'
                          : 'text-stone-400 hover:text-stone-700'
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
