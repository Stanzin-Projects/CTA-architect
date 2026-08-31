export default function Journey() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top spacer for fixed navbar */}
      <div className="h-20" />

      {/* Article Text */}
      <div className="max-w-[750px] mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-16">
        <div className="space-y-6">
          <p className="text-stone-600 text-[13px] leading-[2] font-light">
            " In a country of staggering diversity in its geography, from a sprawling coastline to rolling mountains, thick forests, deep valleys and multidimensional cities, there's always that sense that every place will be like a slow unraveling, an unexpected discovery, something new and unique. For architects, it's a veritable carte blanche kind of canvas, topographies that offer ample opportunity to flex that creative muscle. Some places, though, more than others, are seemingly imbued with singularly unique beauty, an abiding mystery that exerts an extraordinary pull, stronger perhaps than any other place of equal beauty. For architects Suril Patel and Faiza Khan, that turned out to be Ladakh. The decision to set up shop there, in a sense, resulted from their own preoccupation and fascination with the vast, uncountable distinguishing features of different places. "Our passion for the profession is developed through persistent work, travel experiences and various collaborations from our college days through practising years. What was still not clear at the time, is what should be the base to start the practice," says Khan.
          </p>

          <p className="text-stone-600 text-[13px] leading-[2] font-light">
            What evolved out of that introspection was a unique 'travelling' practice, with headquarters in Ahmedabad, Gujarat and Ladakh. Unlike most firms, who essentially anchor their studio in a place and visit other regions or cities where they have ongoing projects, Field Architects chose to do something different. "The idea of 'travelling practice' came about from our desire to create our library of travel experiences and observations," says Patel. Ladakh, as the second space to have a headquarters, apart from Gujarat, was the region that sparked interest. "We wanted to explore vernacular craft and architecture, in response to various climates, terrain and culture. Somehow, the Himalayas and Ladakh gave us that anchor in our search," adds Patel.
          </p>

          <p className="text-stone-600 text-[13px] leading-[2] font-light">
            Now, Khan and Patel spend the four winter months in Ahmedabad and the rest of the year in Ladakh, where they "end up creating mini set-ups depending upon the location of a project. We tend to work close to the site despite the elaborate design and documentation work towards the project, so we move where the project takes us," says Khan. The nomadic nature of the practice certainly requires monumental patience and enviable flexibility, but the pay-off, one can imagine, is worth it. Committing to building in a region like Ladakh would inevitably mean a relentless dedication to learning, mining a deep history to explore traditional construction practices, and finding ways to leverage them within a contemporary aesthetic. "Our designs aim to respond to the context through the creative potentials of various aspects. In Ladakh, they respond to the Himalayan climate, the terrain and local materials while applying vernacular knowledge and fulfilling the modern aspirations of the project," says Patel. One such particular context is the punishing winter here that requires special attention when it comes to building
          </p>

          <p className="text-stone-600 text-[13px] leading-[2] font-light">
            In stark contrast to their Ladakhi experience are the projects they've done in Ahmedabad and, echoing a similar regional framework, the Uttarakhand, where a private villa in the mountains is planned around a courtyard. That is central to a farmhouse in Ahmedabad too, with a corridor wrapped around it. The primacy of context, however, while amplified in a region like Ladakh with its challenging terrain and distinct architecture, is inherent to Patel's and Khan's design approach. For such a young practice, that's already a mountain of experience in a portfolio of diverse architecture. "
          </p>
        </div>

        {/* Attribution */}
        <div className="mt-10 text-right">
          <p className="text-stone-400 text-xs font-light italic">
            - 20 x 20 : Twenty Architects x Twenty Iconic Homes of India,
          </p>
          <p className="text-stone-400 text-xs font-light italic">
            by Gauri Kelkar - Roli Books
          </p>
        </div>
      </div>

      {/* Year Marker */}
      <div className="max-w-[750px] mx-auto px-6 lg:px-12 pb-4">
        <p className="text-xs text-stone-400 tracking-wider mb-4">[ 2024 ]</p>
        <div className="border-t border-stone-300" />
      </div>

      {/* Large Image */}
      <div className="max-w-[750px] mx-auto px-6 lg:px-12 pb-32">
        <div className="aspect-[4/3] overflow-hidden bg-stone-100">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
            alt="Landscape view"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
