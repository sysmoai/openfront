import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries — SYSmoAI AI Systems by Business Type',
  description: 'SYSmoAI builds AI operating systems for agencies, ecommerce, coaching, accounting, clinics, and trading businesses in Bangladesh.',
}

const industries = [
  {
    name: 'Digital Agencies',
    slug: 'agencies',
    icon: '🏢',
    problem: 'Client feedback scattered across WhatsApp, email, and calls. Delivery inconsistent. Reporting manual.',
    install: 'Client portal + project pipeline + SOP wiki + automated reporting',
  },
  {
    name: 'E-commerce & F-commerce',
    slug: 'ecommerce',
    icon: '📦',
    problem: 'Orders lost in inbox. Stock confusion. COD returns leaking cash. Support team overwhelmed.',
    install: 'Order OS + inventory system + returns workflow + daily reporting dashboard',
  },
  {
    name: 'Coaching & Education',
    slug: 'coaching',
    icon: '🎓',
    problem: 'Leads not followed up. Onboarding manual and inconsistent. Payments hard to track.',
    install: 'CRM + onboarding OS + content delivery system + automated follow-up',
  },
  {
    name: 'Accounting & Tax Firms',
    slug: 'accounting',
    icon: '📊',
    problem: 'Client files scattered. Deadlines missed. Billing unclear. Compliance reminders done manually.',
    install: 'Client file OS + deadline calendar + billing tracker + secure comms workflow',
  },
  {
    name: 'Clinics & Healthcare',
    slug: 'clinics',
    icon: '🏥',
    problem: 'Appointment follow-up leaking. Staff accountability unclear. Paper billing. No daily visibility.',
    install: 'Appointment + follow-up OS + staff task system + digital billing tracker',
  },
  {
    name: 'Trading & Distribution',
    slug: 'trading',
    icon: '🚚',
    problem: 'Stock tracked in Excel. Supplier and customer comms scattered. Reporting unreliable.',
    install: 'Inventory OS + stock movement tracker + supplier/customer database + weekly dashboard',
  },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-sysmoai-dark text-sysmoai-text">
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for Your Industry</h1>
        <p className="text-xl text-sysmoai-muted max-w-2xl mx-auto">
          We do not sell generic AI. Every system we build is designed for your specific business type — the problems you face, the workflows you need, the outcomes you want.
        </p>
      </section>

      <section className="px-6 py-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((ind) => (
            <div key={ind.slug} className="bg-sysmoai-surface border border-sysmoai-border rounded-2xl p-6 hover:border-sysmoai-primary/50 transition-colors">
              <div className="text-2xl mb-2">{ind.icon}</div>
              <h2 className="text-xl font-bold text-white mb-3">{ind.name}</h2>
              <div className="mb-4">
                <p className="text-xs text-sysmoai-muted uppercase tracking-wider mb-1">The Problem</p>
                <p className="text-sysmoai-muted text-sm">{ind.problem}</p>
              </div>
              <div>
                <p className="text-xs text-sysmoai-primary uppercase tracking-wider mb-1">What We Install</p>
                <p className="text-sm text-sysmoai-text">{ind.install}</p>
              </div>
              <a
                href={`https://wa.me/8801711638693?text=Hi%20SYSmoAI%2C%20I%20need%20help%20for%20my%20${ind.slug}%20business`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-sysmoai-primary hover:underline"
              >
                Talk to us about {ind.name} →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Your industry not listed?</h2>
        <p className="text-sysmoai-muted mb-8">We work with any Bangladesh business that runs on repeatable processes. WhatsApp us.</p>
        <a
          href="https://wa.me/8801711638693?text=Hi%20SYSmoAI%2C%20I%20have%20a%20different%20business%20type"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sysmoai-primary hover:bg-sysmoai-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors"
        >
          WhatsApp — +880 1711-638693
        </a>
      </section>
    </main>
  )
}
