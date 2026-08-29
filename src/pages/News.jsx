import { Link } from 'react-router-dom'

export default function News() {
  return (
    <div className="bg-white min-h-screen">
      <div className="h-20" />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
        <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-8">News</p>
        <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light">
          CTA STUDIO has received national and international recognition for work that is noted
          for its sensitivity, innovation, and contribution to sustainable, resilient futures.
        </p>
        <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light mt-6">
          Stay tuned for updates on our latest projects, exhibitions, publications, and collaborations.
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
