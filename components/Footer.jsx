import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <div className="mb-4">
              <span className="text-lg tracking-[0.3em] font-medium uppercase">Field</span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400 block">Architects</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              A nomadic architecture practice rooted in the Himalayas, working across diverse landscapes with a deep commitment to craft, climate, and context.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-6">Navigation</h4>
            <div className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm text-stone-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-stone-400">
              <div>
                <p className="text-stone-300 font-medium mb-1">Ladakh</p>
                <p>Field Studios Workshop,</p>
                <p>near Amazon warehouse, Agling,</p>
                <p>Leh, Ladakh (UT), India - 194101</p>
              </div>
              <div>
                <p className="text-stone-300 font-medium mb-1">Ahmedabad</p>
                <p>5, Sangathan Society,</p>
                <p>Vastrapur, Ahmedabad,</p>
                <p>Gujarat, India - 380052</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Field Architects. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:faiza@fieldarchitects.in" className="text-stone-500 text-xs hover:text-white transition-colors">
              faiza@fieldarchitects.in
            </a>
            <a href="mailto:suril@fieldarchitects.in" className="text-stone-500 text-xs hover:text-white transition-colors">
              suril@fieldarchitects.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
