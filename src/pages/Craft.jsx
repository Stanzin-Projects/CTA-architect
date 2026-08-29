import { Link } from 'react-router-dom'

export default function Craft() {
  return (
    <div className="bg-white min-h-screen">
      <div className="h-20" />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
        <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-8">Craft</p>
        <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light">
          cta studio engages deeply with traditional craftsmanship, working alongside local artisans
          to preserve and reinterpret indigenous building techniques. Our craft practice spans earthen
          construction, lime plastering, timber joinery, and stone masonry — skills passed down through
          generations in the Himalayan region.
        </p>
        <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light mt-6">
          We believe that craft is not merely decorative but fundamental to architectural expression.
          Each project engages with material processes that connect building to place, climate, and culture.
        </p>
        <div className="mt-16">
          <Link
            to="/"
            className="text-xs tracking-[0.15em] uppercase text-stone-400 hover:text-stone-900 transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
