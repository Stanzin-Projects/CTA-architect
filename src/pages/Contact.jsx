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
          <div className="max-w-md">
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
                href="mailto:tenzinclb@gmail.com"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors underline underline-offset-4 decoration-stone-300"
              >
                tenzinclb@gmail.com
              </a>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}
