import { Link } from 'react-router-dom'

const teamMembers = [
  { name: 'Atharva Sawardekar', role: 'Architect' },
  { name: 'Christopher Varghese', role: 'Architect' },
  { name: 'Devesh Uniyal', role: 'Architect' },
]

const interns = [
  { name: 'Aarya Dhore', role: 'Intern' },
  { name: 'Akshat Dave', role: 'Intern' },
  { name: 'Nyshadha Rallapati', role: 'Intern' },
  { name: 'Raj Siddhapura', role: 'Intern' },
  { name: 'Yash Ahuja', role: 'Intern' },
]

const artisans = [
  { name: 'Ramesh Vishwakarma', role: 'Carpenter' },
  { name: 'Vikas Kushwaha', role: 'Polisher' },
  { name: 'Brijesh Mahto', role: 'Head Mason' },
  { name: 'Saheb Patel', role: 'Head Mason' },
  { name: 'Medhu Kumar', role: 'Mason' },
  { name: 'Manoj Kumar', role: 'Mason' },
]

const pastColleagues = [
  'ISHAN JADHAV', 'JANMEY SUTHAR', 'ARYAN LOHAR', 'HARSHITHA SANGAR',
  'SHRUTI AJABE', 'VASU KALARIA', 'YUKTA JOSHI', 'KINLEY YANGDAN',
  'BARBORA KOLAROVA', 'VRUSHTI RAVAL', 'ATHARVA SAWARDEKAR', 'ARYAN VAIDYA',
  'SEJAL SELWADIYA', 'AKASH JOSHI', 'JERNIA LINKO', 'ARUNABH GOSWAMI',
  'CHRIS VARGHESE', 'NEEL BHOTRA', 'JATIN KAPOOR', 'PRANALI SHAH',
  'GURJOTSINGH CHAWLA', 'HARSHIT DAGA', 'RISHABH KHAIRE', 'VEDANT MITHRI',
  'NISHI DOSHI', 'AREEBA KHAN', 'ASHAAD KHAN', 'PARIKSHIT',
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-8">About</p>
          <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light">
            Founded by{' '}
            <span className="text-stone-900 font-normal">Faiza Khan</span> and{' '}
            <span className="text-stone-900 font-normal">Suril Patel</span> in 2017, Field Architects is a nomadic
            practice shaped by cognitive travel, vernacular ways of living, and critical spatial readings. Moving
            between Ahmedabad and Ladakh seasonally, the studio works like a caravan. Its practice reinterprets
            indigenous forms and craft traditions through a contemporary lens, bridging geometry, material, and memory.
          </p>
          <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light mt-6">
            Field engages with projects across varied typologies and scales, approaching each with the same clarity
            of purpose and respect for context. Working with a multidisciplinary team of architects and artisans
            built over the years, the studio brings traditional systems into dialogue with contemporary methods to
            create architecture that is rooted, responsive, and finely crafted.
          </p>
          <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light mt-6">
            Field Architects has received national and international recognition for work that is noted for its
            sensitivity, innovation, and contribution to sustainable, resilient futures.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Suril Patel */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center">
                <span className="text-stone-500 text-lg font-light">SP</span>
              </div>
              <div>
                <h3 className="text-sm tracking-[0.15em] uppercase text-stone-900">Ar. Suril Patel</h3>
                <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mt-0.5">Founding Partner</p>
              </div>
            </div>
            <p className="text-stone-600 text-sm leading-[2] font-light pl-0 lg:pl-20">
              Suril Patel has worked with Serie Architects, in Mumbai, Beijing, and London for about a decade,
              and experienced working with Studio Mumbai for Ganga Maki Textile Studio in Uttarakhand. He pursued
              his B Arch in 2005 from IED, Gujarat. He regards processes related to design, representation, and
              construction as the fundamental aspects of the practice and is a perfectionist for details. His
              methodical approach, engineering mindset always push design boundaries.
            </p>
          </div>

          {/* Faiza Khan */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center">
                <span className="text-stone-500 text-lg font-light">FK</span>
              </div>
              <div>
                <h3 className="text-sm tracking-[0.15em] uppercase text-stone-900">Ar. Faiza Khan</h3>
                <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mt-0.5">Founding Partner</p>
              </div>
            </div>
            <p className="text-stone-600 text-sm leading-[2] font-light pl-0 lg:pl-20">
              Faiza Khan earned her B Arch from AoA, Mumbai, and pursued M Arch from Barcelona Institute of
              Architecture in 2011. She has worked with Serie Architects, Malik Architecture, Stantec, and
              Studio Mumbai. She is an avid learner, and observant towards the local context and lifestyle that
              help her mould, appropriate, and execute the wide variety and scales of projects with utmost
              sincerity. She is trained under Ruedi Krebs, a Swiss master artisan, for lime and earthen
              finishes while working on Ganga Maki Textile Studio.
            </p>
          </div>
        </div>
      </section>

      {/* Collaborations Note */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-500 text-sm leading-[2] font-light border-t border-stone-200 pt-10">
            For the past few years, they have actively collaborated on adaptive reuse and conservation projects
            of various scales with Achi Association India, a non-profit organization working to safeguard the
            outstanding but endangered cultural heritage in the Himalayas.
          </p>
          <p className="text-stone-500 text-sm leading-[2] font-light mt-4">
            They have curated and conducted the two-year Passive Solar and Earth Building course, and have worked
            on a range of passive-solar buildings with SECMOL, along with research and development of earthen
            systems at HIAL — Himalayan Institute of Alternatives, Ladakh.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-20 px-6 lg:px-12 bg-stone-50">
        <div className="max-w-4xl mx-auto py-16">
          <h2 className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-12">Meet the Team</h2>

          {/* Architects */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-stone-500 text-xs">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-stone-800">{member.name}</p>
                    <p className="text-xs text-stone-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interns */}
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.25em] uppercase text-stone-400 mb-4">Fellowship & Interns</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interns.map((member, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-stone-500 text-xs">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-stone-800">{member.name}</p>
                    <p className="text-xs text-stone-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Artisans */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-stone-400 mb-4">Artisans</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artisans.map((member, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-stone-500 text-xs">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-stone-800">{member.name}</p>
                    <p className="text-xs text-stone-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Colleagues */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-8">Past Colleagues</h2>
          <p className="text-stone-400 text-xs leading-[2.5] tracking-wider">
            {pastColleagues.join(' | ')}
          </p>
        </div>
      </section>
    </div>
  )
}
