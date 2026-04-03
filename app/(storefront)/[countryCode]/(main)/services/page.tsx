import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — SYSmoAI AI Operating Systems for Bangladesh',
  description: 'Three-tier AI implementation: Audit, Sprint, and Monthly Retainer. Built for agencies, ecommerce, coaching, accounting, clinics, and trading businesses in Bangladesh.',
}

const industries = [
  { name: 'Digital Agencies', slug: 'agencies', icon: '🏢', pain: 'Client chaos, missed deadlines, manual reporting' },
  { name: 'E-commerce & F-commerce', slug: 'ecommerce', icon: '📦', pain: 'Lost orders, stock confusion, COD leakage' },
  { name: 'Coaching & Education', slug: 'coaching', icon: '🎓', pain: 'Leads not followed up, manual onboarding' },
  { name: 'Accounting & Tax Firms', slug: 'accounting', icon: '📊', pain: 'Deadline chaos, client files scattered' },
  { name: 'Clinics & Healthcare', slug: 'clinics', icon: '🏥', pain: 'Appointment leakage, billing manual' },
  { name: 'Trading & Distribution', slug: 'trading', icon: '🚚', pain: 'Stock in Excel, supplier chaos' },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-sysmoai-dark text-sysmoai-text">
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Operating Systems for Bangladesh Businesses</h1>
        <p className="text-xl text-sysmoai-muted max-w-2xl mx-auto mb-8">
          We install Notion-based systems, AI workflows, and automation — so your business runs without the daily chaos. Three engagement tiers. Real delivery. Bangladesh-first.
        </p>
        <a
          href="https://wa.me/8801711638693?text=Hi%20SYSmoAI%2C%20I%20want%20to%20know%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sysmoai-primary hover:bg-sysmoai-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors"
        >
          WhatsApp Us — +880 1711-638693
        </a>
      </section>

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Three Ways to Work With Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'AI Profit Audit',
              price: 'BDT 15,000 – 25,000',
              duration: '3–5 days',
              desc: 'We map your current operations, identify the biggest time and money leaks, and deliver a prioritised AI implementation roadmap.',
              delivers: ['Current state audit', 'Gap analysis report', 'Implementation roadmap', 'Quick win recommendations'],
            },
            {
              name: 'Implementation Sprint',
              price: 'BDT 40,000 – 1,20,000',
              duration: '2–4 weeks',
              desc: 'We build and install your AI operating system — Notion OS, workflows, automations, SOPs — and hand it over with training.',
              delivers: ['Full Notion OS build', 'AI workflow setup', 'Team training', '30-day support'],
              highlight: true,
            },
            {
              name: 'Monthly Retainer',
              price: 'BDT 20,000 – 60,000/mo',
              duration: 'Ongoing',
              desc: 'We become your AI operations partner — maintaining systems, adding automations, and expanding the OS as your business grows.',
              delivers: ['Ongoing maintenance', 'Monthly improvements', 'Priority WhatsApp support', 'Quarterly reviews'],
            },
          ].map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-6 border ${pkg.highlight ? 'bg-sysmoai-primary/10 border-sysmoai-primary' : 'bg-sysmoai-surface border-sysmoai-border'}`}
            >
              {pkg.highlight && <span className="text-xs font-semibold text-sysmoai-primary">Most Popular</span>}
              <h3 className="text-xl font-bold text-white mt-2 mb-1">{pkg.name}</h3>
              <p className="text-sysmoai-primary font-semibold text-sm mb-1">{pkg.price}</p>
              <p className="text-sysmoai-muted text-xs mb-4">{pkg.duration}</p>
              <p className="text-sysmoai-muted text-sm mb-4">{pkg.desc}</p>
              <ul className="space-y-1">
                {pkg.delivers.map((d) => (
                  <li key={d} className="text-sm text-sysmoai-muted flex gap-2">✓ {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-sysmoai-muted text-sm mt-6">Exact pricing depends on business size and scope. Contact us on WhatsApp for a custom quote.</p>
      </section>

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Industries We Serve</h2>
        <p className="text-sysmoai-muted text-center mb-12">We have built systems specifically for these business types in Bangladesh.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((ind) => (
            <div key={ind.slug} className="bg-sysmoai-surface border border-sysmoai-border rounded-xl p-5 hover:border-sysmoai-primary/50 transition-colors">
              <div className="text-2xl mb-2">{ind.icon}</div>
              <h3 className="text-white font-semibold mb-1">{ind.name}</h3>
              <p className="text-sysmoai-muted text-sm">{ind.pain}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Not sure which tier fits you?</h2>
        <p className="text-sysmoai-muted mb-8">Start with a free WhatsApp conversation. We will tell you honestly what you need.</p>
        <a
          href="https://wa.me/8801711638693?text=Hi%20SYSmoAI%2C%20I%20want%20to%20discuss%20my%20business"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
        >
          💬 WhatsApp — Free Consultation
        </a>
      </section>
    </main>
  )
}
