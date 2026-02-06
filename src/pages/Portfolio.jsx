import { useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'FinTrack Pro',
    category: 'Mobile App',
    description: 'A personal finance management app with real-time expense tracking, budget insights, and smart savings goals.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'MediConnect',
    category: 'Web Application',
    description: 'Telehealth platform enabling patients to book appointments, consult doctors via video, and manage prescriptions.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    color: 'from-green-500 to-emerald-400',
  },
  {
    title: 'ShopVerse',
    category: 'Web Application',
    description: 'Full-featured e-commerce platform with AI-powered product recommendations and seamless checkout flow.',
    tech: ['React', 'Python', 'Stripe API'],
    color: 'from-purple-500 to-pink-400',
  },
  {
    title: 'TaskFlow',
    category: 'Mobile App',
    description: 'Collaborative project management tool with Kanban boards, time tracking, and team communication.',
    tech: ['Flutter', 'Firebase', 'GraphQL'],
    color: 'from-orange-500 to-amber-400',
  },
  {
    title: 'GreenEats',
    category: 'UI/UX Design',
    description: 'Brand identity and mobile app design for a sustainable meal planning and grocery delivery startup.',
    tech: ['Figma', 'Prototyping', 'User Research'],
    color: 'from-teal-500 to-green-400',
  },
  {
    title: 'CloudDash',
    category: 'Web Application',
    description: 'Real-time cloud infrastructure monitoring dashboard with alerting, analytics, and cost optimization.',
    tech: ['React', 'D3.js', 'AWS SDK'],
    color: 'from-indigo-500 to-blue-400',
  },
]

const categories = ['All', 'Mobile App', 'Web Application', 'UI/UX Design']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="reveal inline-block text-sm font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-400 mb-4">
            Our Work
          </span>
          <h1 className="reveal text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ animationDelay: '100ms' }}>
            Our Portfolio
          </h1>
          <p className="reveal text-gray-600 dark:text-gray-400 max-w-2xl text-lg" style={{ animationDelay: '200ms' }}>
            A selection of projects that showcase our expertise across mobile, web, and design.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="reveal flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="reveal group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Gradient header bar */}
                <div className={`h-2 bg-gradient-to-r ${project.color} transition-all duration-300 group-hover:h-3`} />
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-400 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Have a project in mind? We'd love to hear about it.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
