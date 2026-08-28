import { useState, useEffect, useCallback } from 'react'

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
    setTimeout(() => setIsTransitioning(false), 1000)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % heroImages.length)
  }, [current, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
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

      {/* Slide Caption & Counter */}
      <div className="absolute bottom-10 left-6 lg:left-12 z-30">
        <p className="text-white/70 text-sm tracking-wider font-light">
          {heroImages[current].caption}
        </p>
      </div>
      <div className="absolute bottom-10 right-6 lg:right-12 z-30">
        <p className="text-white/70 text-sm tracking-wider font-light">
          {current + 1}/{heroImages.length}
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
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
  )
}
