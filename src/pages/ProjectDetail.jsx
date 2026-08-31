import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'

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
    title: 'LANDSCAPE AT THE KYAGAR',
    metadata: {
      year: '2023',
      location: 'Kyagar, Ladakh',
      status: 'Completed',
      category: 'Landscape',
      type: 'Landscape Design',
      builtUpArea: '2,400 sq ft',
      siteArea: '5,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1200&q=80',
    ],
    description: `In Kyagar, a village folded into the stark expanse of Nubra Valley, this landscape design project works with the natural terrain and indigenous plant species to create spaces that harmonize with the Himalayan environment.

The design responds to the extreme high-altitude climate, incorporating traditional stone wall construction and native plantings that thrive in the arid conditions. Water features are integrated to create microclimates and support biodiversity.

The landscape engages with the surrounding mountain context, using local materials and planting palettes that require minimal irrigation while providing seasonal interest throughout the year.`,
  },
  'moljoks-pavilion-and-cottages': {
    title: 'MOLJOKS PAVILION AND COTTAGES',
    metadata: {
      year: '2022',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Architecture',
      type: 'Hospitality',
      builtUpArea: '5,200 sq ft',
      siteArea: '12,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    description: `A pavilion and cottage complex that reinterprets traditional Ladakhi architectural forms through a contemporary lens, using local stone and timber construction methods.

The complex features a central gathering pavilion flanked by individual cottages, each designed to frame views of the surrounding mountains. Rammed earth walls provide thermal mass for the extreme temperature swings.

The project demonstrates how vernacular building knowledge can inform contemporary hospitality architecture, creating spaces that are both culturally rooted and functionally modern.`,
  },
  'gulzars-residence': {
    title: "GULZAR'S RESIDENCE",
    metadata: {
      year: '2021',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Architecture',
      type: 'Residence',
      builtUpArea: '3,800 sq ft',
      siteArea: '6,500 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    description: `A private residence that blends vernacular Ladakhi construction with contemporary spatial planning, designed to respond to the extreme climate and dramatic landscape.

The residence features thick earth-rendered walls, timber joinery, and strategically placed windows that capture mountain views while minimizing heat loss during harsh winters.

The house negotiates between the introverted character of traditional Ladakhi homes and the desire for openness and light, creating a dwelling that is both sheltered and expansive.`,
  },
  'makoii-apothecary': {
    title: 'MAKOII APOTHECARY',
    metadata: {
      year: '2022',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Architecture',
      type: 'Commercial',
      builtUpArea: '1,200 sq ft',
      siteArea: '2,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    description: `A contemporary apothecary space that bridges traditional healing practices with modern architectural expression, using locally sourced materials and earthen finishes.

The interior features hand-applied lime plaster walls, reclaimed timber shelving, and natural stone flooring. The layout follows the traditional apothecary arrangement while introducing contemporary lighting and display systems.

The project explores how material authenticity and craft-based construction can create commercial spaces with atmosphere and cultural resonance.`,
  },
  'thinlars-residence': {
    title: 'THINLARS RESIDENCE',
    metadata: {
      year: '2021',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Architecture',
      type: 'Residence',
      builtUpArea: '4,100 sq ft',
      siteArea: '7,200 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    ],
    description: `A residence that draws from the traditional Ladakhi courtyard typology, reinterpreted through contemporary material palettes and passive solar strategies.

The courtyard serves as a thermal buffer, capturing solar gain in winter while providing shaded outdoor space in summer. Local stone and timber are combined with modern glazing systems.

The project demonstrates how traditional spatial typologies can be adapted to contemporary living requirements while maintaining their environmental performance.`,
  },
  'kalon-house': {
    title: 'KALON HOUSE',
    metadata: {
      year: '2025',
      location: 'Kyagar, Nubra, Ladakh',
      status: 'Completed',
      category: 'Architecture',
      type: 'Residence',
      builtUpArea: '310 sqm',
      siteArea: '750 sqm',
      photography: 'Iker Zuniga',
    },
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    description: `In Kyagar, a village folded into the stark expanse of Nubra Valley, the Kalon Residence reimagines the ancestral home of a family historically linked to the Silk Route. Rooted in Ladakhi traditions yet distinctly contemporary, the house is both an architectural inheritance and an evolution of how domestic space can respond to the region's climate, culture, and aspirations.

Traditional Ladakhi houses follow a logic shaped by necessity. The ground floor holds the kitchen and common areas, where family life revolves around the warmth of a wood-fired bukhari, while bedrooms and private spaces are added incrementally above. These homes, built of stone and mud, are often inward-looking and compartmentalized, carefully conserving heat but limiting openness.

The Kalon Residence responds by rethinking this order. With insulated earthen walls, passive solar-heating strategies, and the thermal buffer of an earth-bermed north side, the house creates warmth and efficiency while allowing a more fluid spatial experience.

Bedrooms with attached bathrooms are positioned on the ground floor — a reversal of the traditional arrangement — where their proximity to the earth lends them a sense of calm and shelter, while also benefiting from the moderated thermal environment created by the heated spaces above. The first floor opens outward, designed for light, views, and gathering. A timber bridge spans a double height central volume, connecting a modest, airy kitchen and dining space on one side with a large living room on the other. Four wooden columns subtly choreograph this expansive hall, where seating clusters accommodate both intimate family moments and larger gatherings. Deep-set windows frame the surrounding mountains, transforming the dramatic landscape into a constant presence within the home.

At first sight, the residence feels less constructed than unearthed. Crowning this grounded mass is a butterfly-shaped roof, a striking yet purposeful gesture. It funnels snowmelt and rainwater toward a gargoyle on the north side, making the act of collecting water into an architectural ritual.

Materially, the house remains firmly anchored in its context. Stabilized earth blocks pressed from the site, timber from the family's own orchards, and stone embankments bind the structure to its terrain. What distinguishes Kalon Residence is its atmosphere of belonging. The house draws on the traditions of mountain architecture not as nostalgia but as necessity — earth for mass, timber for span, compactness for warmth. Yet its openness, generosity of light, and carefully orchestrated layout distinguish it from the introverted character of older houses.

For the Kalon family, the house is both continuation and redefinition: an architecture that carries Ladakh's resilience forward while opening to a more generous, light-filled, and contemporary way of living.`,
  },
  'conservation-of-palay-house': {
    title: 'CONSERVATION AND ADAPTIVE REUSE OF PALAY HOUSE',
    metadata: {
      year: '2020',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Conservation',
      type: 'Heritage Conservation',
      builtUpArea: '8,200 sq ft',
      siteArea: '15,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    ],
    description: `A conservation project focused on the adaptive reuse of the historic Palay House, preserving its heritage fabric while introducing contemporary interventions for modern use.

Working with the Achi Association India, the project involved extensive documentation of the existing structure, stabilization of compromised walls, and careful insertion of new services and spatial programs.

The project demonstrates how heritage buildings can be sensitively adapted to serve contemporary functions while maintaining their cultural and architectural significance.`,
  },
  'restoration-of-rantak': {
    title: 'RESTORATION OF RANTAK',
    metadata: {
      year: '2021',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Conservation',
      type: 'Heritage Restoration',
      builtUpArea: '3,400 sq ft',
      siteArea: '6,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
    ],
    description: `A restoration project that carefully revives the traditional Rantak structure using authentic materials and craftsmanship techniques passed down through generations.

Local masons were engaged to replicate traditional construction methods, including hand-quarried stone, lime mortar, and timber structural elements. The restoration preserves the building's historical character.

The project contributes to the preservation of Ladakh's built heritage while demonstrating the continuing relevance of traditional building knowledge.`,
  },
  'serendipity-arts-festival': {
    title: 'SERENDIPITY ARTS FESTIVAL: ECHOES OF LADAKH',
    metadata: {
      year: '2022',
      location: 'Goa, India',
      status: 'Completed',
      category: 'Exhibition',
      type: 'Exhibition Installation',
      builtUpArea: '2,000 sq ft',
      siteArea: '2,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    description: `An exhibition installation at the Serendipity Arts Festival that brings the material culture and spatial traditions of Ladakh to a contemporary audience through immersive design.

The installation recreated the spatial qualities of Ladakhi architecture using locally sourced materials transported from the Himalayas. Visitors experienced the textures, scales, and atmospheres of high-altitude living.

The project explored how exhibition design can communicate architectural ideas through direct material engagement rather than representational display.`,
  },
  'conservation-of-choskor-house': {
    title: 'CONSERVATION AND REVIVAL OF CHOSKOR HOUSE',
    metadata: {
      year: '2023',
      location: 'Leh, Ladakh',
      status: 'In Progress',
      category: 'Conservation',
      type: 'Heritage Conservation',
      builtUpArea: '5,600 sq ft',
      siteArea: '10,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    ],
    description: `A conservation initiative dedicated to reviving the Choskor House, a significant heritage structure in Ladakh, through careful documentation and traditional building methods.

The project involved detailed archival research, 3D scanning of existing conditions, and collaborative work with heritage conservation specialists to develop an appropriate intervention strategy.

The conservation approach prioritizes reversibility and minimal intervention, ensuring that the historical integrity of the structure is maintained while enabling its continued use.`,
  },
  'yoga-pavilion': {
    title: 'YOGA PAVILION',
    metadata: {
      year: '2022',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Architecture',
      type: 'Pavilion',
      builtUpArea: '800 sq ft',
      siteArea: '2,500 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    ],
    description: `An open-air yoga pavilion designed to frame the surrounding mountain landscape, using minimal structural elements and locally sourced materials.

The pavilion uses slender timber columns to support a lightweight roof structure, creating an enclosed yet transparent space that connects practitioners with the natural environment.

The project explores how architecture can facilitate contemplative practice through spatial openness and material simplicity.`,
  },
  'the-script-adff-stir-pavilion': {
    title: 'THE SCRIPT: ADFF STIR PAVILION',
    metadata: {
      year: '2023',
      location: 'Dubai, UAE',
      status: 'Completed',
      category: 'Exhibition',
      type: 'Exhibition Pavilion',
      builtUpArea: '1,500 sq ft',
      siteArea: '1,500 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    description: `A pavilion design for the ADFF STIR exhibition, exploring the intersection of traditional Ladakhi craft and contemporary architectural discourse.

The pavilion employed a modular timber system inspired by traditional Ladakhi construction, allowing for rapid assembly and disassembly while maintaining structural integrity and aesthetic quality.

The project demonstrates how traditional building knowledge can be translated into contemporary exhibition architecture with precision and authenticity.`,
  },
  'landscape-at-ladakh-sarai': {
    title: 'LANDSCAPE AT LADAKH SARAI',
    metadata: {
      year: '2021',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Landscape',
      type: 'Landscape Design',
      builtUpArea: '4,500 sq ft',
      siteArea: '8,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    ],
    description: `Landscape design for Ladakh Sarai, integrating traditional stone walls, native planting, and water features to create a serene courtyard environment.

The landscape design employs traditional Ladakhi stone walling techniques to create intimate garden rooms. Native species including juniper, sea buckthorn, and willow provide seasonal interest and ecological value.

The project creates a transitional landscape between the built environment and the natural terrain, providing both shelter and connection to the broader Himalayan context.`,
  },
  'jamun-glades-villa-03': {
    title: 'JAMUN GLADES - VILLA 03',
    metadata: {
      year: '2023',
      location: 'Dehradun, India',
      status: 'Completed',
      category: 'Architecture',
      type: 'Residence',
      builtUpArea: '7,200 sq ft',
      siteArea: '12,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    description: `A villa design within the Jamun Glades development, featuring a contemporary interpretation of regional architectural language with emphasis on indoor-outdoor living.

The villa negotiates the sloping site through a series of terraced levels, each offering distinct relationships with the surrounding landscape. Local stone and timber are combined with contemporary glazing.

The project explores how residential architecture can respond to the specific conditions of site, climate, and culture while meeting contemporary living standards.`,
  },
  'kailash-pavilion': {
    title: 'KAILASH PAVILION',
    metadata: {
      year: '2022',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Architecture',
      type: 'Pavilion',
      builtUpArea: '600 sq ft',
      siteArea: '1,500 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    description: `A meditation pavilion inspired by the sacred geography of Mount Kailash, designed as a contemplative space that connects architecture with the natural landscape.

The pavilion's circular plan references the kora (circumambulation) path around Mount Kailash. A central oculus frames the sky, while peripheral openings direct views toward the surrounding peaks.

The project explores how architectural form can embody spiritual and cultural narratives through spatial experience and material presence.`,
  },
  'pre-freb-building': {
    title: 'PRE-FREB BUILDING, PROTOTYPE',
    metadata: {
      year: '2020',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Social',
      type: 'Housing Prototype',
      builtUpArea: '1,000 sq ft',
      siteArea: '2,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=1200&q=80',
    ],
    description: `A prototype pre-fabricated building system designed for seismic-resistant construction in Ladakh, combining earth-building techniques with modern engineering.

Developed in collaboration with SECMOL, the prototype demonstrates how traditional earth-building methods can be enhanced with contemporary structural engineering to create safe, sustainable housing.

The project addresses the urgent need for affordable, climate-responsive housing in the Himalayan region.`,
  },
  'childrens-park-at-shey': {
    title: "CHILDREN'S PARK AT SHEY",
    metadata: {
      year: '2021',
      location: 'Shey, Ladakh',
      status: 'Completed',
      category: 'Social',
      type: 'Public Space',
      builtUpArea: '3,200 sq ft',
      siteArea: '5,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=80',
    ],
    description: `A community children's park in Shey, Ladakh, designed with playful spatial elements and locally sourced materials to create an engaging outdoor environment.

The park features natural play elements including stone climbing structures, timber balancing beams, and sand areas. Native plantings provide shade and seasonal interest while requiring minimal maintenance.

The project demonstrates how public space design can respond to community needs while respecting local ecological and cultural conditions.`,
  },
  'landscape-for-residence-at-phey': {
    title: 'LANDSCAPE FOR PRIVATE RESIDENCE AT PHEY',
    metadata: {
      year: '2022',
      location: 'Phey, Ladakh',
      status: 'Completed',
      category: 'Landscape',
      type: 'Landscape Design',
      builtUpArea: '2,800 sq ft',
      siteArea: '4,500 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1200&q=80',
    ],
    description: `A private landscape design in Phey that works with the natural terrain and local plant species to create a garden setting for a residential property.

The design introduces a series of terraced garden spaces that step down the natural slope, creating distinct zones for relaxation, dining, and children's play.

The project integrates landscape and architecture to create a seamless living environment that responds to the dramatic Himalayan context.`,
  },
  'municipal-wash-facility': {
    title: 'MUNICIPAL WASH FACILITY AT MRF',
    metadata: {
      year: '2020',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Social',
      type: 'Public Facility',
      builtUpArea: '1,800 sq ft',
      siteArea: '3,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=1200&q=80',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80',
    ],
    description: `A public wash facility design that addresses community sanitation needs with durable, climate-responsive architecture and efficient water management systems.

The facility incorporates composting toilets, greywater recycling, and solar water heating. The building envelope is designed to withstand extreme cold while providing comfortable interior conditions.

The project demonstrates how essential public infrastructure can be designed with architectural quality and environmental responsibility.`,
  },
  'womens-shelter-house': {
    title: "WOMEN'S SHELTER HOUSE & TRAINING CENTER",
    metadata: {
      year: '2021',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Social',
      type: 'Community Center',
      builtUpArea: '4,200 sq ft',
      siteArea: '7,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80',
    ],
    description: `A shelter house and training center designed to provide safe accommodation and skill-building opportunities for women, using locally sourced materials and passive design strategies.

The building provides residential quarters, training workshops, and communal spaces arranged around a central courtyard. Passive solar design minimizes energy requirements for heating.

The project addresses social needs through architecture that is dignified, functional, and rooted in its cultural context.`,
  },
  'neha-snacks-restaurant': {
    title: 'NEHA SNACKS RESTAURANT EXTENSION',
    metadata: {
      year: '2022',
      location: 'Ahmedabad, India',
      status: 'Completed',
      category: 'Architecture',
      type: 'Commercial',
      builtUpArea: '1,600 sq ft',
      siteArea: '2,200 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1560184897-502a475f51de?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    ],
    description: `An extension to an existing restaurant that introduces contemporary spatial interventions while respecting the existing building fabric and commercial function.

The extension doubles the seating capacity while creating a distinct spatial experience through varying ceiling heights, material finishes, and connections to the street.

The project demonstrates how incremental architectural intervention can transform commercial spaces while maintaining their established character and function.`,
  },
  'doll-house': {
    title: 'DOLL HOUSE',
    metadata: {
      year: '2023',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Architecture',
      type: 'Residence',
      builtUpArea: '850 sq ft',
      siteArea: '1,500 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    description: `A small-scale residential project that explores playful spatial relationships and material experimentation within a compact footprint.

Despite its modest size, the house achieves spatial complexity through split levels, built-in furniture, and carefully proportioned openings that create a sense of spaciousness.

The project demonstrates how thoughtful design can maximize spatial quality within constrained budgets and tight sites.`,
  },
  'singge-palace-hotel': {
    title: 'SINGGE PALACE HOTEL FACADE & LANDSCAPE',
    metadata: {
      year: '2021',
      location: 'Leh, Ladakh',
      status: 'Completed',
      category: 'Architecture',
      type: 'Hospitality',
      builtUpArea: '12,000 sq ft',
      siteArea: '20,000 sq ft',
      photography: 'Field Architects',
    },
    images: [
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1200&q=80',
    ],
    description: `A facade renovation and landscape design for the Singge Palace Hotel, blending heritage restoration with contemporary hospitality standards.

The project involved the restoration of traditional facade elements while upgrading building services and creating a landscaped arrival sequence that reflects the hotel's Himalayan context.

The intervention demonstrates how heritage buildings can be adapted for contemporary hospitality use while maintaining their cultural identity and architectural character.`,
  },
}

/* ─── Image Slider ─── */
function ImageSlider({ images, title }) {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const next = useCallback(() => {
    goTo((current + 1) % images.length)
  }, [current, images.length, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length)
  }, [current, images.length, goTo])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev])

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={img}
              alt={`${title} - Image ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Nav Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-all duration-300 cursor-pointer"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-all duration-300 cursor-pointer"
          aria-label="Next image"
        >
          <svg className="w-4 h-4 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators + Counter */}
      <div className="flex items-center justify-between mt-4 px-1">
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-px transition-all duration-500 ${
                index === current ? 'w-8 bg-stone-900' : 'w-4 bg-stone-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        <p className="text-xs text-stone-400 tracking-wider font-light">
          {current + 1}/{images.length}
        </p>
      </div>
    </div>
  )
}

/* ─── Project Detail Page ─── */
export default function ProjectDetail() {
  const { id } = useParams()
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

  const { metadata } = project
  const nextIndex = (currentIndex + 1) % projectsOrder.length
  const nextId = projectsOrder[nextIndex]
  const nextProject = projectsData[nextId]

  const metaFields = [
    { label: 'YEAR', value: metadata.year },
    { label: 'LOCATION', value: metadata.location },
    { label: 'STATUS', value: metadata.status },
    { label: 'CATEGORY', value: metadata.category },
    { label: 'TYPE', value: metadata.type },
    { label: 'BUILT UP AREA', value: metadata.builtUpArea },
    { label: 'SITE AREA', value: metadata.siteArea },
    { label: 'PHOTOGRAPHY', value: metadata.photography },
  ]

  // Split description into paragraphs
  const paragraphs = project.description.split('\n\n').filter(Boolean)

  return (
    <div className="bg-white min-h-screen">
      {/* Top spacer for fixed navbar */}
      <div className="h-20" />

      {/* Title */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-12">
        <h1 className="text-2xl lg:text-4xl text-stone-900 font-light tracking-[0.05em] text-center">
          {project.title}
        </h1>
      </div>

      {/* Metadata Grid */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-12 pb-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
          {metaFields.map((field) => (
            <div key={field.label}>
              <p className="text-[9px] tracking-[0.2em] uppercase text-stone-300 mb-1.5">
                {field.label}
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                {field.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Slider */}
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 pb-14">
        <ImageSlider images={project.images} title={project.title} />
      </div>

      {/* Description */}
      <div className="max-w-[700px] mx-auto px-6 lg:px-12 pb-20 lg:pb-24">
        <div className="space-y-6">
          {paragraphs.map((para, index) => (
            <p
              key={index}
              className="text-stone-500 text-sm leading-[2] font-light"
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        <div className="border-t border-stone-200" />
      </div>

      {/* Next Project */}
      <Link
        to={`/projects/${nextId}`}
        className="block w-full group"
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 py-14 lg:py-16">
          <p className="text-[9px] tracking-[0.3em] uppercase text-stone-300 mb-4">
            Next Project
          </p>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-lg lg:text-xl text-stone-900 font-light tracking-wide group-hover:text-stone-500 transition-colors duration-300">
              {nextProject.title}
            </h2>
            <span className="text-stone-300 group-hover:text-stone-600 transition-colors duration-300 text-base shrink-0">
              &rarr;
            </span>
          </div>
          <p className="text-[9px] tracking-[0.2em] uppercase text-stone-400 mt-2">
            {nextProject.metadata.category}
          </p>
        </div>
      </Link>
    </div>
  )
}
