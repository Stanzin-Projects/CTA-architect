import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['Architecture', 'Conservation', 'Landscape', 'Social', 'Exhibition']

const projects = [
  {
    id: 'landscape-at-the-kyagar',
    title: 'Landscape at the Kyagar',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
  },
  {
    id: 'moljoks-pavilion-and-cottages',
    title: 'Moljoks Pavilion and Cottages',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
  },
  {
    id: 'gulzars-residence',
    title: "Gulzar's Residence",
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  },
  {
    id: 'makoii-apothecary',
    title: 'Makoii Apothecary',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
  },
  {
    id: 'thinlars-residence',
    title: 'Thinlars Residence',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
  },
  {
    id: 'kalon-house',
    title: 'Kalon House',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
  },
  {
    id: 'conservation-of-palay-house',
    title: 'Conservation and Adaptive Reuse of Palay House',
    category: 'Conservation',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80',
  },
  {
    id: 'restoration-of-rantak',
    title: 'Restoration of Rantak',
    category: 'Conservation',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
  },
  {
    id: 'serendipity-arts-festival',
    title: 'Serendipity Arts Festival: Echoes of Ladakh',
    category: 'Exhibition',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80',
  },
  {
    id: 'conservation-of-choskor-house',
    title: 'Conservation and Revival of Choskor House',
    category: 'Conservation',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
  },
  {
    id: 'yoga-pavilion',
    title: 'Yoga Pavilion',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&q=80',
  },
  {
    id: 'the-script-adff-stir-pavilion',
    title: 'The Script: ADFF STIR Pavilion',
    category: 'Exhibition',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80',
  },
  {
    id: 'landscape-at-ladakh-sarai',
    title: 'Landscape at Ladakh Sarai',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1200&q=80',
  },
  {
    id: 'jamun-glades-villa-03',
    title: 'Jamun Glades - Villa 03',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
  },
  {
    id: 'kailash-pavilion',
    title: 'Kailash Pavilion',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1200&q=80',
  },
  {
    id: 'pre-freb-building',
    title: 'Pre-FREB Building, Prototype',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=1200&q=80',
  },
  {
    id: 'childrens-park-at-shey',
    title: "Children's Park at Shey",
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
  },
  {
    id: 'landscape-for-residence-at-phey',
    title: 'Landscape for Private Residence at Phey',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
  },
  {
    id: 'municipal-wash-facility',
    title: 'Municipal Wash Facility at MRF',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=1200&q=80',
  },
  {
    id: 'womens-shelter-house',
    title: "Women's Shelter House & Training Center",
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=80',
  },
  {
    id: 'neha-snacks-restaurant',
    title: 'Neha Snacks Restaurant Extension',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1560184897-502a475f51de?w=1200&q=80',
  },
  {
    id: 'doll-house',
    title: 'Doll House',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80',
  },
  {
    id: 'singge-palace-hotel',
    title: 'Singge Palace Hotel Facade & Landscape',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80',
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(null)

  const filteredProjects = activeCategory
    ? projects.filter(p => p.category === activeCategory)
    : projects

  return (
    <div className="bg-white min-h-screen">
      {/* Top spacer for fixed navbar */}
      <div className="h-20" />

      {/* Category Filters */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`text-[13px] tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-stone-900 font-medium'
                  : 'text-stone-400 hover:text-stone-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid — 2 columns, large images */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-400 text-sm tracking-wider">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
