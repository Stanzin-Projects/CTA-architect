import { useState } from 'react'

const categories = ['All', 'Architecture', 'Conservation', 'Landscape', 'Social', 'Exhibition']

const projects = [
  {
    title: 'Landscape at the Kyagar',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    title: "Moljoks Pavilion and Cottages",
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
    title: "Thinlars Residence",
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    title: 'Kalon House',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  },
  {
    title: 'Conservation and Adaptive Reuse of Palay House',
    category: 'Conservation',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80',
  },
  {
    title: 'Restoration of Rantak',
    category: 'Conservation',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
  },
  {
    title: 'Serendipity Arts Festival: Echoes of Ladakh',
    category: 'Exhibition',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
  },
  {
    title: 'Conservation and Revival of Choskor House',
    category: 'Conservation',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
  },
  {
    title: 'Yoga Pavilion',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80',
  },
  {
    title: 'The Script: ADFF STIR Pavilion',
    category: 'Exhibition',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
  },
  {
    title: 'Landscape at Ladakh Sarai',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&q=80',
  },
  {
    title: 'Jamun Glades - Villa 03',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
  },
  {
    title: 'Kailash Pavilion',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80',
  },
  {
    title: 'Pre-FREB Building, Prototype',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=800&q=80',
  },
  {
    title: "Children's Park at Shey",
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  },
  {
    title: 'Landscape for Private Residence at Phey',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  },
  {
    title: 'Municipal Wash Facility at MRF',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&q=80',
  },
  {
    title: "Women's Shelter House & Training Center",
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80',
  },
  {
    title: 'Neha Snacks Restaurant Extension',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1560184897-502a475f51de?w=800&q=80',
  },
  {
    title: 'Doll House',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80',
  },
  {
    title: 'Singge Palace Hotel Facade & Landscape',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-8">Projects</p>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 lg:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-[0.15em] uppercase transition-all duration-300 pb-1 ${
                  activeCategory === cat
                    ? 'text-stone-900 border-b border-stone-900'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-stone-100 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1">
                  {project.category}
                </p>
                <h3 className="text-sm text-stone-800 tracking-wide group-hover:text-stone-500 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-stone-400 text-sm tracking-wider">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
