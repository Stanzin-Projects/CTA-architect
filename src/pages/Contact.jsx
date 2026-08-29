export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-8">Contact</p>
          <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light">
            While rooted in Himalayan context, cta studio  is actively expanding its scope — bringing this
            ethos to diverse landscapes and communities across India and beyond. We welcome opportunities for
            collaboration, commissions, and partnerships that value contextual design and material sensitivity.
          </p>
          <p className="text-stone-600 text-base lg:text-lg leading-[2] font-light mt-6">
            For project inquiries, job opportunities, or collaborations, please contact:
          </p>
        </div>
      </section>

      {/* Location Cards */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Ladakh */}
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-stone-900 mb-6 font-medium">Delhi</h3>
              <div className="space-y-4 text-sm text-stone-500 leading-relaxed">
                <p>CTA Studios Workshop,</p>
                <p>near Alina saloon,</p>
                <p>Delhi (UT), India</p>
                <p>194101</p>
              </div>
              <div className="mt-8 pt-6 border-t border-stone-200">
                <p className="text-xs tracking-[0.15em] uppercase text-stone-400 mb-2">Principal Architect</p>
                <p className="text-sm text-stone-800">Ar. Caleb Tenzin</p>
                <a
                  href="mailto:faiza@fieldarchitects.in"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors underline underline-offset-4 decoration-stone-300"
                >
                  faiza@fieldarchitects.in
                </a>
              </div>
            </div>

            {/* Ahmedabad */}
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-stone-900 mb-6 font-medium">Ahmedabad</h3>
              <div className="space-y-4 text-sm text-stone-500 leading-relaxed">
                <p>5, Sangathan Society,</p>
                <p>Vastrapur, Ahmedabad,</p>
                <p>Gujarat, India</p>
                <p>380052</p>
              </div>
              <div className="mt-8 pt-6 border-t border-stone-200">
                <p className="text-xs tracking-[0.15em] uppercase text-stone-400 mb-2">Principal Architect</p>
                <p className="text-sm text-stone-800">Ar. Suril Patel</p>
                <a
                  href="mailto:suril@fieldarchitects.in"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors underline underline-offset-4 decoration-stone-300"
                >
                  suril@fieldarchitects.in
                </a>
              </div>
            </div>
          </div>

          {/* Seasonal Note */}
          <div className="mt-16 lg:mt-20 max-w-4xl mx-auto">
            <div className="bg-stone-50 p-8 lg:p-12">
              <p className="text-stone-500 text-sm leading-[2] font-light text-center">
                Field Architects operates in Ladakh from <span className="text-stone-800 font-normal">March to November</span> and in
                Ahmedabad for the <span className="text-stone-800 font-normal">winter months</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
