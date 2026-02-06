import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const emails = JSON.parse(localStorage.getItem('newsletterEmails') || '[]')
    emails.push(email)
    localStorage.setItem('newsletterEmails', JSON.stringify(emails))
    setEmail('')
    setSubscribed(true)
  }

  return (
    <div>
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(96,165,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        </div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-blue-400 mb-4">
              Stay Updated
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Join Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Newsletter
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-lg mx-auto">
              Get the latest insights on design, development, and digital innovation delivered straight to your inbox.
            </p>
          </div>

          {subscribed ? (
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">You're Subscribed!</h2>
              <p className="text-gray-400">
                Thank you for joining. We'll keep you in the loop.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal max-w-md mx-auto" style={{ animationDelay: '200ms' }}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border border-gray-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-gray-400 transition-all duration-200 focus:bg-white/15"
                  placeholder="name@company.com"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
