import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const benefits = [
  'Expert mentorship from industry professionals',
  'Hands-on projects with real-world applications',
  'Career guidance and job placement support',
  'Access to exclusive alumni network',
  'Flexible scheduling to fit your lifestyle',
  'Industry-recognized certification upon completion'
]

export function HomeCTA() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-green)] rounded-xl overflow-hidden shadow-2xl animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Transform Your Tech Career?
              </h2>
              <p className="text-white/90 mb-8 leading-relaxed">
                Join hundreds of graduates who have successfully launched their careers in technology. Start your journey today.
              </p>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 w-full md:w-fit"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Side - Quick Stats */}
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 flex flex-col justify-center border-l border-white/20">
              <div className="space-y-8">
                <div className="animate-float-in" style={{ animationDelay: '0s' }}>
                  <div className="text-4xl font-black text-white mb-2">25+</div>
                  <div className="text-white/80">Program Tracks Available</div>
                  <div className="text-sm text-white/60 mt-2">From Web Development to AI & Emerging Tech</div>
                </div>

                <div className="animate-float-in" style={{ animationDelay: '0.1s' }}>
                  <div className="text-4xl font-black text-white mb-2">8 Weeks</div>
                  <div className="text-white/80">Program Duration</div>
                  <div className="text-sm text-white/60 mt-2">Intensive, focused learning experience</div>
                </div>

                <div className="animate-float-in" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl font-black text-white mb-2">95%</div>
                  <div className="text-white/80">Success Rate</div>
                  <div className="text-sm text-white/60 mt-2">Our graduates land meaningful roles</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Have questions? <Link href="/faq" className="text-primary font-bold hover:underline">Check out our FAQ</Link> or <Link href="/contact" className="text-primary font-bold hover:underline">contact us</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
