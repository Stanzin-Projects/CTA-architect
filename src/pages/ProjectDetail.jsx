import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'

const projectsData = {
  'landscape-at-the-kyagar': {
    title: 'Landscape at the Kyagar',
    category: 'Landscape',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80',
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1400&q=80',
    ],
    description: 'A landscape design project situated in the Kyagar region of Ladakh, working with the natural terrain and indigenous plant species to create spaces that harmonize with the Himalayan environment.',
  },
  'moljoks-pavilion-and-cottages': {
    title: 'Moljoks Pavilion and Cottages',
    category: 'Architecture',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80',
    ],
    description: 'A pavilion and cottage complex that reinterprets traditional Ladakhi architectural forms through a contemporary lens, using local stone and timber construction methods.',
  },
  'gulzars-residence': {
    title: "Gulzar's Residence",
    category: 'Architecture',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80',
    ],
    description: 'A private residence that blends vernacular Ladakhi construction with contemporary spatial planning, designed to respond to the extreme climate and dramatic landscape.',
  },
  'makoii-apothecary': {
    title: 'Makoii Apothecary',
    category: 'Architecture',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
    ],
    description: 'A contemporary apothecary space that bridges traditional healing practices with modern architectural expression, using locally sourced materials and earthen finishes.',
  },
  'thinlars-residence': {
    title: 'Thinlars Residence',
    category: 'Architecture',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
    ],
    description: 'A residence that draws from the traditional Ladakhi courtyard typology, reinterpreted through contemporary material palettes and passive solar strategies.',
  },
  'kalon-house': {
    title: 'Kalon House',
    category: 'Architecture',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
    ],
    description: 'A residential project that engages with the dramatic Himalayan landscape, featuring earth-rendered walls, timber joinery, and carefully framed mountain views.',
  },
  'conservation-of-palay-house': {
    title: 'Conservation and Adaptive Reuse of Palay House',
    category: 'Conservation',
    images: [
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80',
    ],
    description: 'A conservation project focused on the adaptive reuse of the historic Palay House, preserving its heritage fabric while introducing contemporary interventions for modern use.',
  },
  'restoration-of-rantak': {
    title: 'Restoration of Rantak',
    category: 'Conservation',
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=80',
    ],
    description: 'A restoration project that carefully revives the traditional Rantak structure using authentic materials and craftsmanship techniques passed down through generations.',
  },
  'serendipity-arts-festival': {
    title: 'Serendipity Arts Festival: Echoes of Ladakh',
    category: 'Exhibition',
    images: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
    ],
    description: 'An exhibition installation at the Serendipity Arts Festival that brings the material culture and spatial traditions of Ladakh to a contemporary audience through immersive design.',
  },
  'conservation-of-choskor-house': {
    title: 'Conservation and Revival of Choskor House',
    category: 'Conservation',
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80',
    ],
    description: 'A conservation initiative dedicated to reviving the Choskor House, a significant heritage structure in Ladakh, through careful documentation and traditional building methods.',
  },
  'yoga-pavilion': {
    title: 'Yoga Pavilion',
    category: 'Architecture',
    images: [
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
    ],
    description: 'An open-air yoga pavilion designed to frame the surrounding mountain landscape, using minimal structural elements and locally sourced materials.',
  },
  'the-script-adff-stir-pavilion': {
    title: 'The Script: ADFF STIR Pavilion',
    category: 'Exhibition',
    images: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1400&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
    ],
    description: 'A pavilion design for the ADFF STIR exhibition, exploring the intersection of traditional Ladakhi craft and contemporary architectural discourse.',
  },
  'landscape-at-ladakh-sarai': {
    title: 'Landscape at Ladakh Sarai',
    category: 'Landscape',
    images: [
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1400&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80',
    ],
    description: 'Landscape design for Ladakh Sarai, integrating traditional stone walls, native planting, and water features to create a serene courtyard environment.',
  },
  'jamun-glades-villa-03': {
    title: 'Jamun Glades - Villa 03',
    category: 'Architecture',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80',
    ],
    description: 'A villa design within the Jamun Glades development, featuring a contemporary interpretation of regional architectural language with emphasis on indoor-outdoor living.',
  },
  'kailash-pavilion': {
    title: 'Kailash Pavilion',
    category: 'Architecture',
    images: [
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80',
    ],
    description: 'A meditation pavilion inspired by the sacred geography of Mount Kailash, designed as a contemplative space that connects architecture with the natural landscape.',
  },
  'pre-freb-building': {
    title: 'Pre-FREB Building, Prototype',
    category: 'Social',
    images: [
      'https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=1400&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80',
      'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=1400&q=80',
    ],
    description: 'A prototype pre-fabricated building system designed for seismic-resistant construction in Ladakh, combining earth-building techniques with modern engineering.',
  },
  'childrens-park-at-shey': {
    title: "Children's Park at Shey",
    category: 'Social',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&q=80',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1400&q=80',
    ],
    description: 'A community children\'s park in Shey, Ladakh, designed with playful spatial elements and locally sourced materials to create an engaging outdoor environment.',
  },
  'landscape-for-residence-at-phey': {
    title: 'Landscape for Private Residence at Phey',
    category: 'Landscape',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80',
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1400&q=80',
    ],
    description: 'A private landscape design in Phey that works with the natural terrain and local plant species to create a garden setting for a residential property.',
  },
  'municipal-wash-facility': {
    title: 'Municipal Wash Facility at MRF',
    category: 'Social',
    images: [
      'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=1400&q=80',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1400&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1400&q=80',
    ],
    description: 'A public wash facility design that addresses community sanitation needs with durable, climate-responsive architecture and efficient water management systems.',
  },
  'womens-shelter-house': {
    title: "Women's Shelter House & Training Center",
    category: 'Social',
    images: [
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1400&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1400&q=80',
    ],
    description: 'A shelter house and training center designed to provide safe accommodation and skill-building opportunities for women, using locally sourced materials and passive design strategies.',
  },
  'neha-snacks-restaurant': {
    title: 'Neha Snacks Restaurant Extension',
    category: 'Architecture',
    images: [
      'https://images.unsplash.com/photo-1560184897-502a475f51de?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
    ],
    description: 'An extension to an existing restaurant that introduces contemporary spatial interventions while respecting the existing building fabric and commercial function.',
  },
  'doll-house': {
    title: 'Doll House',
    category: 'Architecture',
    images: [
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80',
    ],
    description: 'A small-scale residential project that explores playful spatial relationships and material experimentation within a compact footprint.',
  },
  'singge-palace-hotel': {
    title: 'Singge Palace Hotel Facade & Landscape',
    category: 'Architecture',
    images: [
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80',
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1400&q=80',
    ],
    description: 'A facade renovation and landscape design for the Singge Palace Hotel, blending heritage restoration with contemporary hospitality standards.',
  },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData[id]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-400 text-sm mb-6">Project not found.</p>
          <Link
            to="/projects"
            className="text-xs tracking-[0.15em] uppercase text-stone-600 hover:text-stone-900 transition-colors border-b border-stone-300 hover:border-stone-900 pb-0.5"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Top spacer for fixed navbar */}
      <div className="h-20" />

      {/* Project Header */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-12 pb-8">
        <p className="text-[10px] tracking-[0.25em] uppercase text-stone-400 mb-3">
          {project.category}
        </p>
        <h1 className="text-2xl lg:text-3xl text-stone-900 font-light tracking-wide">
          {project.title}
        </h1>
      </div>

      {/* Project Images — full width, stacked */}
      <div className="w-full">
        {project.images.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`${project.title} - Image ${index + 1}`}
              className="w-full h-auto object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <p className="text-stone-500 text-sm leading-[2] font-light max-w-2xl">
          {project.description}
        </p>
      </div>

      {/* Back to Projects */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
        <Link
          to="/projects"
          className="text-xs tracking-[0.15em] uppercase text-stone-400 hover:text-stone-900 transition-colors"
        >
          &larr; Back to Projects
        </Link>
      </div>
    </div>
  )
}
