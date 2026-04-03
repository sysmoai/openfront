import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About SYSmoAI — AI Systems for Bangladesh Businesses',
  description: 'SYSmoAI builds AI-powered operating systems for Bangladesh businesses. Founded by EMON HOSSAIN.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sysmoai-dark text-sysmoai-text">
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">We Build Operating Systems for Bangladesh Businesses</h1>
        <p className="text-xl text-sysmoai-muted max-w-2xl mx-auto">
          SYSmoAI implements AI workflows, Notion-based systems, and automation so your business runs without chaos — even when you are not there.
        </p>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="bg-sysmoai-surface border border-sysmoai-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why This Exists</h2>
          <p className="text-sysmoai-muted mb-4">
            Bangladesh businesses are run by smart, hardworking people who are stuck managing everything manually — WhatsApp threads, spreadsheets, verbal instructions.
            The bottleneck is almost always the owner.
          </p>
          <p className="text-sysmoai-muted mb-4">
            SYSmoAI builds the systems that remove that bottleneck. We install AI-powered operating systems using Notion, automation tools, and custom AI workflows — so your team can
            execute without you micromanaging.
          </p>
          <p className="text-sysmoai-muted">
            Founded by <strong className="text-white">EMON HOSSAIN</strong> — who previously built and operated AIPS with 10,000+ customers using WhatsApp-first systems.
            We know what works in Bangladesh. We have done it.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'AI Workflow Design', desc: 'We map your operations and install AI-powered workflows that reduce manual work by 60–80%.' },
            { title: 'Notion OS Implementation', desc: 'We build complete business operating systems in Notion — CRM, project delivery, SOPs, dashboards.' },
            { title: 'WhatsApp-Native Systems', desc: 'Automation and systems designed to work with how Bangladesh businesses actually communicate.' },
            { title: 'Monthly Maintenance', desc: 'We stay with you post-launch to update, improve, and adapt the system as your business grows.' },
          ].map((item) => (
            <div key={item.title} className="bg-sysmoai-surface border border-sysmoai-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sysmoai-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 max-w-3xl mx-auto">
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">What We Do Not Do</h3>
          <ul className="text-sysmoai-muted text-sm space-y-2">
            <li>✗ We do not sell generic AI training courses</li>
            <li>✗ We do not promise overnight transformation</li>
            <li>✗ We do not give you a tool and leave you alone</li>
            <li>✗ We do not make claims we cannot prove</li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to build your AI operating system?</h2>
        <a
          href="https://wa.me/8801711638693?text=Hi%20SYSmoAI%2C%20I%20want%20to%20learn%20more"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sysmoai-primary hover:bg-sysmoai-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors"
        >
          Start on WhatsApp — +880 1711-638693
        </a>
      </section>
    </main>
  )
}
