import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
    caption: 'IMG_9453',
  },
  {
    url: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1600&q=80',
    caption: 'IMG_20190314_124443',
  },
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80',
    caption: 'IMG_20190312_152722',
  },
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&q=80',
    caption: 'IMG_9453',
  },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 800)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % heroImages.length)
  }, [current, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div>
      {/* Hero Section with Image Slider */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={img.url}
              alt={img.caption}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-20" />

        {/* Slider Caption & Counter */}
        <div className="absolute bottom-12 left-6 lg:left-12 z-30">
          <p className="text-white/70 text-sm tracking-wider font-light">
            {heroImages[current].caption}
          </p>
        </div>
        <div className="absolute bottom-12 right-6 lg:right-12 z-30">
          <p className="text-white/70 text-sm tracking-wider font-light">
            {current + 1}/{heroImages.length}
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-8 h-px transition-all duration-500 ${
                index === current ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Description */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light">
            Field Architects is a nomadic architecture practice founded by{' '}
            <Link to="/about" className="text-stone-900 font-normal hover:underline underline-offset-4">
              Faiza Khan
            </Link>{' '}
            and{' '}
            <Link to="/about" className="text-stone-900 font-normal hover:underline underline-offset-4">
              Suril Patel
            </Link>{' '}
            in 2017, shaped by their cognitive travel experiences, immersive vernacular lifestyle and critical
            spatial observations. The studio deconstructs indigenous forms and traditional craft through a
            contemporary lens — bridging geometry, material, and memory.
          </p>
          <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light mt-6">
            Rooted in the Himalayas, Field Architects continues to work across diverse landscapes, with a deep
            commitment to craft, climate, and context.
          </p>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-xs tracking-[0.3em] uppercase text-stone-400">Selected Works</h2>
            <Link
              to="/projects"
              className="text-xs tracking-[0.15em] uppercase text-stone-600 hover:text-stone-900 transition-colors border-b border-stone-300 hover:border-stone-900 pb-0.5"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Moljoks Pavilion and Cottages',
                category: 'Architecture',
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
              },
              {
                title: "Gulzar's Residence",
                category: 'Architecture',
                image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
              },
              {
                title: 'Makoii Apothecary',
                category: 'Architecture',
                image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
              },
              {
                title: 'Kalon House',
                category: 'Architecture',
                image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
              },
              {
                title: 'Yoga Pavilion',
                category: 'Architecture',
                image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
              },
              {
                title: 'Conservation of Palay House',
                category: 'Conservation',
                image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80',
              },
            ].map((project, index) => (
              <Link
                key={index}
                to="/projects"
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-stone-100 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1">
                  {project.category}
                </p>
                <h3 className="text-sm text-stone-800 tracking-wide group-hover:text-stone-500 transition-colors duration-300">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
