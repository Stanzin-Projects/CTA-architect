import { Link } from 'react-router-dom'

export default function Academics() {
  return (
    <div className="bg-white min-h-screen">
      <div className="h-20" />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
        <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-8">Academics</p>
        <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light">
         CTA Studio is committed to knowledge-sharing through academic engagement. The studio has
          curated and conducted the two-year Passive Solar and Earth Building course, and has worked on
          research and development of earthen building systems at HIAL — Himalayan Institute of
          Alternatives, Ladakh.
        </p>
        <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light mt-6">
          Our academic work bridges practice and pedagogy, drawing from field research, material
          experimentation, and collaborative learning with communities and institutions.
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
