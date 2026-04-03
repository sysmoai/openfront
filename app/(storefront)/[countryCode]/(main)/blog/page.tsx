import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — SYSmoAI AI Insights for Bangladesh Businesses',
  description: 'Practical AI implementation guides, case studies, and operating system insights for Bangladesh businesses.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-sysmoai-dark text-sysmoai-text">
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">SYSmoAI Insights</h1>
        <p className="text-sysmoai-muted mb-16">Practical AI implementation for Bangladesh businesses — no hype, just systems.</p>

        <div className="space-y-4 text-left">
          {[
            { title: 'How a Dhaka Agency Eliminated Client Chaos with Notion OS', date: 'Coming soon', tag: 'Case Study' },
            { title: 'The 5 Workflow Bottlenecks Killing Bangladesh SME Growth', date: 'Coming soon', tag: 'Guide' },
            { title: 'WhatsApp + Notion: The Combination That Runs Our Business', date: 'Coming soon', tag: 'System Design' },
            { title: 'Why AI Implementation Fails for Most BD Businesses (And How to Fix It)', date: 'Coming soon', tag: 'Insight' },
          ].map((post) => (
            <div key={post.title} className="bg-sysmoai-surface border border-sysmoai-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2 text-xs">
                <span className="px-2 py-1 rounded bg-sysmoai-primary/20 text-sysmoai-primary">{post.tag}</span>
                <span className="text-sysmoai-muted">{post.date}</span>
              </div>
              <h2 className="text-white font-semibold">{post.title}</h2>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-sysmoai-muted text-sm mb-4">Get notified when we publish — follow on WhatsApp</p>
          <a
            href="https://wa.me/8801711638693?text=Hi%20SYSmoAI%2C%20notify%20me%20about%20new%20posts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sysmoai-primary hover:bg-sysmoai-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Follow on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
