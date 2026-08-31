import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const projectsOrder = [
  'landscape-at-the-kyagar',
  'moljoks-pavilion-and-cottages',
  'gulzars-residence',
  'makoii-apothecary',
  'thinlars-residence',
  'kalon-house',
  'conservation-of-palay-house',
  'restoration-of-rantak',
  'serendipity-arts-festival',
  'conservation-of-choskor-house',
  'yoga-pavilion',
  'the-script-adff-stir-pavilion',
  'landscape-at-ladakh-sarai',
  'jamun-glades-villa-03',
  'kailash-pavilion',
  'pre-freb-building',
  'childrens-park-at-shey',
  'landscape-for-residence-at-phey',
  'municipal-wash-facility',
  'womens-shelter-house',
  'neha-snacks-restaurant',
  'doll-house',
  'singge-palace-hotel',
]

const projectsData = {
  'landscape-at-the-kyagar': {
    title: 'Landscape at the Kyagar',
    category: 'Landscape',
    year: '2023',
    location: 'Kyagar, Ladakh',
    area: '2,400 sq ft',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80',
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1400&q=80',
    ],
    description: 'A landscape design project situated in the Kyagar region of Ladakh, working with the natural terrain and indigenous plant species to create spaces that harmonize with the Himalayan environment.',
    details: 'The design responds to the extreme high-altitude climate, incorporating traditional stone wall construction and native plantings that thrive in the arid conditions. Water features are integrated to create microclimates and support biodiversity.',
  },
  'moljoks-pavilion-and-cottages': {
    title: 'Moljoks Pavilion and Cottages',
    category: 'Architecture',
    year: '2022',
    location: 'Leh, Ladakh',
    area: '5,200 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80',
    ],
    description: 'A pavilion and cottage complex that reinterprets traditional Ladakhi architectural forms through a contemporary lens, using local stone and timber construction methods.',
    details: 'The complex features a central gathering pavilion flanked by individual cottages, each designed to frame views of the surrounding mountains. Rammed earth walls provide thermal mass for the extreme temperature swings.',
  },
  'gulzars-residence': {
    title: "Gulzar's Residence",
    category: 'Architecture',
    year: '2021',
    location: 'Leh, Ladakh',
    area: '3,800 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80',
    ],
    description: 'A private residence that blends vernacular Ladakhi construction with contemporary spatial planning, designed to respond to the extreme climate and dramatic landscape.',
    details: 'The residence features thick earth-rendered walls, timber joinery, and strategically placed windows that capture mountain views while minimizing heat loss during harsh winters.',
  },
  'makoii-apothecary': {
    title: 'Makoii Apothecary',
    category: 'Architecture',
    year: '2022',
    location: 'Leh, Ladakh',
    area: '1,200 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
    ],
    description: 'A contemporary apothecary space that bridges traditional healing practices with modern architectural expression, using locally sourced materials and earthen finishes.',
    details: 'The interior features hand-applied lime plaster walls, reclaimed timber shelving, and natural stone flooring. The layout follows the traditional apothecary arrangement while introducing contemporary lighting and display systems.',
  },
  'thinlars-residence': {
    title: 'Thinlars Residence',
    category: 'Architecture',
    year: '2021',
    location: 'Leh, Ladakh',
    area: '4,100 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
    ],
    description: 'A residence that draws from the traditional Ladakhi courtyard typology, reinterpreted through contemporary material palettes and passive solar strategies.',
    details: 'The courtyard serves as a thermal buffer, capturing solar gain in winter while providing shaded outdoor space in summer. Local stone and timber are combined with modern glazing systems.',
  },
  'kalon-house': {
    title: 'Kalon House',
    category: 'Architecture',
    year: '2023',
    location: 'Leh, Ladakh',
    area: '6,500 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
    ],
    description: 'A residential project that engages with the dramatic Himalayan landscape, featuring earth-rendered walls, timber joinery, and carefully framed mountain views.',
    details: 'The house is organized along a central axis that aligns with the mountain vista, with living spaces opening to the south for passive solar gain. Hand-crafted timber details reference traditional Ladakhi joinery.',
  },
  'conservation-of-palay-house': {
    title: 'Conservation and Adaptive Reuse of Palay House',
    category: 'Conservation',
    year: '2020',
    location: 'Leh, Ladakh',
    area: '8,200 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80',
    ],
    description: 'A conservation project focused on the adaptive reuse of the historic Palay House, preserving its heritage fabric while introducing contemporary interventions for modern use.',
    details: 'Working with the Achi Association India, the project involved extensive documentation of the existing structure, stabilization of compromised walls, and careful insertion of new services and spatial programs.',
  },
  'restoration-of-rantak': {
    title: 'Restoration of Rantak',
    category: 'Conservation',
    year: '2021',
    location: 'Leh, Ladakh',
    area: '3,400 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=80',
    ],
    description: 'A restoration project that carefully revives the traditional Rantak structure using authentic materials and craftsmanship techniques passed down through generations.',
    details: 'Local masons were engaged to replicate traditional construction methods, including hand-quarrried stone, lime mortar, and timber structural elements. The restoration preserves the building\'s historical character.',
  },
  'serendipity-arts-festival': {
    title: 'Serendipity Arts Festival: Echoes of Ladakh',
    category: 'Exhibition',
    year: '2022',
    location: 'Goa, India',
    area: '2,000 sq ft',
    images: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
    ],
    description: 'An exhibition installation at the Serendipity Arts Festival that brings the material culture and spatial traditions of Ladakh to a contemporary audience through immersive design.',
    details: 'The installation recreated the spatial qualities of Ladakhi architecture using locally sourced materials transported from the Himalayas. Visitors experienced the textures, scales, and atmospheres of high-altitude living.',
  },
  'conservation-of-choskor-house': {
    title: 'Conservation and Revival of Choskor House',
    category: 'Conservation',
    year: '2023',
    location: 'Leh, Ladakh',
    area: '5,600 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80',
    ],
    description: 'A conservation initiative dedicated to reviving the Choskor House, a significant heritage structure in Ladakh, through careful documentation and traditional building methods.',
    details: 'The project involved detailed archival research, 3D scanning of existing conditions, and collaborative work with heritage conservation specialists to develop an appropriate intervention strategy.',
  },
  'yoga-pavilion': {
    title: 'Yoga Pavilion',
    category: 'Architecture',
    year: '2022',
    location: 'Leh, Ladakh',
    area: '800 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
    ],
    description: 'An open-air yoga pavilion designed to frame the surrounding mountain landscape, using minimal structural elements and locally sourced materials.',
    details: 'The pavilion uses slender timber columns to support a lightweight roof structure, creating an enclosed yet transparent space that connects practitioners with the natural environment.',
  },
  'the-script-adff-stir-pavilion': {
    title: 'The Script: ADFF STIR Pavilion',
    category: 'Exhibition',
    year: '2023',
    location: 'Dubai, UAE',
    area: '1,500 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1400&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
    ],
    description: 'A pavilion design for the ADFF STIR exhibition, exploring the intersection of traditional Ladakhi craft and contemporary architectural discourse.',
    details: 'The pavilion employed a modular timber system inspired by traditional Ladakhi construction, allowing for rapid assembly and disassembly while maintaining structural integrity and aesthetic quality.',
  },
  'landscape-at-ladakh-sarai': {
    title: 'Landscape at Ladakh Sarai',
    category: 'Landscape',
    year: '2021',
    location: 'Leh, Ladakh',
    area: '4,500 sq ft',
    images: [
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1400&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80',
    ],
    description: 'Landscape design for Ladakh Sarai, integrating traditional stone walls, native planting, and water features to create a serene courtyard environment.',
    details: 'The landscape design employs traditional Ladakhi stone walling techniques to create intimate garden rooms. Native species including juniper, sea buckthorn, and willow provide seasonal interest and ecological value.',
  },
  'jamun-glades-villa-03': {
    title: 'Jamun Glades - Villa 03',
    category: 'Architecture',
    year: '2023',
    location: 'Dehradun, India',
    area: '7,200 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80',
    ],
    description: 'A villa design within the Jamun Glades development, featuring a contemporary interpretation of regional architectural language with emphasis on indoor-outdoor living.',
    details: 'The villa negotiates the sloping site through a series of terraced levels, each offering distinct relationships with the surrounding landscape. Local stone and timber are combined with contemporary glazing.',
  },
  'kailash-pavilion': {
    title: 'Kailash Pavilion',
    category: 'Architecture',
    year: '2022',
    location: 'Leh, Ladakh',
    area: '600 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80',
    ],
    description: 'A meditation pavilion inspired by the sacred geography of Mount Kailash, designed as a contemplative space that connects architecture with the natural landscape.',
    details: 'The pavilion\'s circular plan references the kora (circumambulation) path around Mount Kailash. A central oculus frames the sky, while peripheral openings direct views toward the surrounding peaks.',
  },
  'pre-freb-building': {
    title: 'Pre-FREB Building, Prototype',
    category: 'Social',
    year: '2020',
    location: 'Leh, Ladakh',
    area: '1,000 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=1400&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80',
      'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=1400&q=80',
    ],
    description: 'A prototype pre-fabricated building system designed for seismic-resistant construction in Ladakh, combining earth-building techniques with modern engineering.',
    details: 'Developed in collaboration with SECMOL, the prototype demonstrates how traditional earth-building methods can be enhanced with contemporary structural engineering to create safe, sustainable housing.',
  },
  'childrens-park-at-shey': {
    title: "Children's Park at Shey",
    category: 'Social',
    year: '2021',
    location: 'Shey, Ladakh',
    area: '3,200 sq ft',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&q=80',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1400&q=80',
    ],
    description: "A community children's park in Shey, Ladakh, designed with playful spatial elements and locally sourced materials to create an engaging outdoor environment.",
    details: 'The park features natural play elements including stone climbing structures, timber balancing beams, and sand areas. Native plantings provide shade and seasonal interest while requiring minimal maintenance.',
  },
  'landscape-for-residence-at-phey': {
    title: 'Landscape for Private Residence at Phey',
    category: 'Landscape',
    year: '2022',
    location: 'Phey, Ladakh',
    area: '2,800 sq ft',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80',
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1400&q=80',
    ],
    description: 'A private landscape design in Phey that works with the natural terrain and local plant species to create a garden setting for a residential property.',
    details: 'The design introduces a series of terraced garden spaces that step down the natural slope, creating distinct zones for relaxation, dining, and children\'s play.',
  },
  'municipal-wash-facility': {
    title: 'Municipal Wash Facility at MRF',
    category: 'Social',
    year: '2020',
    location: 'Leh, Ladakh',
    area: '1,800 sq ft',
    images: [
      'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=1400&q=80',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1400&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1400&q=80',
    ],
    description: 'A public wash facility design that addresses community sanitation needs with durable, climate-responsive architecture and efficient water management systems.',
    details: 'The facility incorporates composting toilets, greywater recycling, and solar water heating. The building envelope is designed to withstand extreme cold while providing comfortable interior conditions.',
  },
  'womens-shelter-house': {
    title: "Women's Shelter House & Training Center",
    category: 'Social',
    year: '2021',
    location: 'Leh, Ladakh',
    area: '4,200 sq ft',
    images: [
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1400&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1400&q=80',
    ],
    description: "A shelter house and training center designed to provide safe accommodation and skill-building opportunities for women, using locally sourced materials and passive design strategies.",
    details: 'The building provides residential quarters, training workshops, and communal spaces arranged around a central courtyard. Passive solar design minimizes energy requirements for heating.',
  },
  'neha-snacks-restaurant': {
    title: 'Neha Snacks Restaurant Extension',
    category: 'Architecture',
    year: '2022',
    location: 'Ahmedabad, India',
    area: '1,600 sq ft',
    images: [
      'https://images.unsplash.com/photo-1560184897-502a475f51de?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
    ],
    description: 'An extension to an existing restaurant that introduces contemporary spatial interventions while respecting the existing building fabric and commercial function.',
    details: 'The extension doubles the seating capacity while creating a distinct spatial experience through varying ceiling heights, material finishes, and connections to the street.',
  },
  'doll-house': {
    title: 'Doll House',
    category: 'Architecture',
    year: '2023',
    location: 'Leh, Ladakh',
    area: '850 sq ft',
    images: [
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80',
    ],
    description: 'A small-scale residential project that explores playful spatial relationships and material experimentation within a compact footprint.',
    details: 'Despite its modest size, the house achieves spatial complexity through split levels, built-in furniture, and carefully proportioned openings that create a sense of spaciousness.',
  },
  'singge-palace-hotel': {
    title: 'Singge Palace Hotel Facade & Landscape',
    category: 'Architecture',
    year: '2021',
    location: 'Leh, Ladakh',
    area: '12,000 sq ft',
    images: [
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80',
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1400&q=80',
    ],
    description: 'A facade renovation and landscape design for the Singge Palace Hotel, blending heritage restoration with contemporary hospitality standards.',
    details: 'The project involved the restoration of traditional facade elements while upgrading building services and creating a landscaped arrival sequence that reflects the hotel\'s Himalayan context.',
  },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectsData[id]
  const currentIndex = projectsOrder.indexOf(id)

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

  // Get next project (loop back to first if at end)
  const nextIndex = (currentIndex + 1) % projectsOrder.length
  const nextId = projectsOrder[nextIndex]
  const nextProject = projectsData[nextId]

  const goToNextProject = () => {
    navigate(`/projects/${nextId}`)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Top spacer for fixed navbar */}
      <div className="h-20" />

      {/* Project Header — Category + Title */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-12 pb-8">
        <p className="text-[10px] tracking-[0.25em] uppercase text-stone-400 mb-3">
          {project.category}
        </p>
        <h1 className="text-2xl lg:text-3xl text-stone-900 font-light tracking-wide">
          {project.title}
        </h1>
      </div>

      {/* Project Info Bar */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pb-10">
        <div className="flex flex-wrap gap-8 text-xs text-stone-400">
          {project.year && (
            <div>
              <span className="text-stone-300 mr-2">Year</span>
              <span className="text-stone-600">{project.year}</span>
            </div>
          )}
          {project.location && (
            <div>
              <span className="text-stone-300 mr-2">Location</span>
              <span className="text-stone-600">{project.location}</span>
            </div>
          )}
          {project.area && (
            <div>
              <span className="text-stone-300 mr-2">Area</span>
              <span className="text-stone-600">{project.area}</span>
            </div>
          )}
        </div>
      </div>

      {/* Project Images — full width, stacked with spacing */}
      <div className="w-full space-y-1">
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

      {/* Description + Details */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-stone-700 text-base leading-[1.8] font-light">
              {project.description}
            </p>
          </div>
          <div>
            <p className="text-stone-500 text-sm leading-[1.9] font-light">
              {project.details}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="border-t border-stone-200" />
      </div>

      {/* Next Project Button */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <button
          onClick={goToNextProject}
          className="group w-full text-left cursor-pointer"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-4">
            Next Project
          </p>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-xl lg:text-2xl text-stone-900 font-light tracking-wide group-hover:text-stone-500 transition-colors duration-300">
              {nextProject.title}
            </h2>
            <span className="text-stone-300 group-hover:text-stone-600 transition-colors duration-300 text-lg shrink-0">
              &rarr;
            </span>
          </div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mt-2">
            {nextProject.category}
          </p>
        </button>
      </div>

      {/* Next Project Preview Image */}
      <div className="w-full pb-24 lg:pb-32">
        <button onClick={goToNextProject} className="w-full cursor-pointer">
          <div className="aspect-[16/7] overflow-hidden">
            <img
              src={nextProject.images[0]}
              alt={nextProject.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </button>
      </div>
    </div>
  )
}
