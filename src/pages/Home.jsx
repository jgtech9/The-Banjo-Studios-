import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(96,165,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Floating accent shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Crafting Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Excellence
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We design and develop apps & websites that transform ideas into powerful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/portfolio"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-pulse-glow"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-gray-400 hover:border-blue-400 text-gray-200 hover:text-blue-400 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-white dark:bg-gray-900">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            What We Build
          </h2>
          <p className="reveal text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto" style={{ animationDelay: '100ms' }}>
            From concept to launch, we deliver end-to-end digital solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <div className="reveal group p-8 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mobile Apps</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Native and cross-platform mobile applications built for performance, usability, and scale.
              </p>
            </div>
            <div className="reveal group p-8 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Web Applications</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Responsive, modern web apps using React, Next.js, and cutting-edge technologies.
              </p>
            </div>
            <div className="reveal group p-8 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                User-centered design that balances aesthetics with intuitive functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="reveal text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto" style={{ animationDelay: '100ms' }}>
            Let's turn your vision into a digital product that your users will love.
          </p>
          <Link
            to="/contact"
            className="reveal inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-pulse-glow"
            style={{ animationDelay: '200ms' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
