import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-float" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="reveal inline-block text-sm font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-400 mb-4">
            Get In Touch
          </span>
          <h1 className="reveal text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ animationDelay: '100ms' }}>
            Contact Us
          </h1>
          <p className="reveal text-gray-600 dark:text-gray-400 max-w-2xl text-lg" style={{ animationDelay: '200ms' }}>
            Have a project in mind? We'd love to hear about it. Let's build something great together.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="reveal-scale max-w-2xl mx-auto text-center py-12">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Message Sent!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => { setSubmitted(false); setError(false) }}
                className="text-blue-500 hover:text-blue-400 font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Info Cards */}
              <div className="space-y-6 stagger-children">
                <div className="reveal group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Drop us a line and we'll respond within 24 hours.
                  </p>
                </div>

                <div className="reveal group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Let's Talk</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Schedule a free consultation to discuss your project ideas.
                  </p>
                </div>

                <div className="reveal group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Quick Response</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We typically respond within a few hours during business days.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                {error && (
                  <div className="reveal mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <form
                  action="https://formspree.io/f/your-unique-form-id"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="reveal"
                >
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />
                  <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="project-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Project Type
                    </label>
                    <select
                      id="project-type"
                      name="project-type"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
                    >
                      <option value="">Select a project type</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="web-app">Web Application</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-500 hover:bg-blue-400 font-semibold rounded-lg text-sm w-full sm:w-auto px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-pulse-glow"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
