export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="reveal inline-block text-sm font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-400 mb-4">
              About Us
            </span>
            <h1 className="reveal text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6" style={{ animationDelay: '100ms' }}>
              Building Digital Products
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                That Matter
              </span>
            </h1>
            <p className="reveal text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl" style={{ animationDelay: '200ms' }}>
              The Banjo Studios is a design and development firm founded on the belief that
              exceptional software starts with deep understanding and meticulous craft.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">

            {/* Mission Card */}
            <div className="reveal group bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6" />
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To deliver innovative software solutions that empower businesses and delight users.
              </p>
            </div>

            {/* Values Card */}
            <div className="reveal group bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full mb-6" />
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Values</h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                  Excellence
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                  Creativity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                  Collaboration
                </li>
              </ul>
            </div>

            {/* Expertise Card */}
            <div className="reveal group bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mb-6" />
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Tailwind CSS', 'Modern Web'].map((tech) => (
                  <span key={tech} className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2.5 py-1 rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
