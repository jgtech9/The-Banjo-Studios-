const team = [
  {
    name: 'Blake',
    role: 'Founder & CEO',
    bio: 'Visionary leader with a passion for digital innovation. Blake drives the company strategy and ensures every project aligns with our mission to deliver exceptional digital products.',
    initials: 'B',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Rajan',
    role: 'Founder & CTO',
    bio: 'Technical architect who transforms complex challenges into elegant solutions. Rajan leads the engineering team and stays at the forefront of emerging technologies.',
    initials: 'R',
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    name: 'Joel',
    role: 'Founder, COO & Lead Developer',
    bio: 'Full-stack developer and operations specialist who bridges the gap between design and engineering. Joel ensures projects ship on time with exceptional quality.',
    initials: 'J',
    gradient: 'from-green-500 to-emerald-400',
  },
]

const steps = [
  { step: '01', title: 'Discover', desc: 'Understand your goals and users', color: 'from-blue-500 to-cyan-400' },
  { step: '02', title: 'Design', desc: 'Craft intuitive, beautiful interfaces', color: 'from-purple-500 to-pink-400' },
  { step: '03', title: 'Develop', desc: 'Build with modern, scalable tech', color: 'from-green-500 to-emerald-400' },
  { step: '04', title: 'Deploy', desc: 'Launch, monitor, and iterate', color: 'from-orange-500 to-amber-400' },
]

export default function Team() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="reveal inline-block text-sm font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-400 mb-4">
            The People
          </span>
          <h1 className="reveal text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ animationDelay: '100ms' }}>
            Our Team
          </h1>
          <p className="reveal text-gray-600 dark:text-gray-400 max-w-2xl text-lg" style={{ animationDelay: '200ms' }}>
            The founders behind The Banjo Studios — a team united by the belief that great software starts with great people.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {team.map((member) => (
              <div
                key={member.name}
                className="reveal group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Avatar */}
                <div className="pt-8 flex justify-center">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <span className="text-3xl font-bold text-white">{member.initials}</span>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h2>
                  <p className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="reveal text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How We Work
          </h2>
          <p className="reveal text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto" style={{ animationDelay: '100ms' }}>
            A proven process that turns your ideas into polished digital products.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto stagger-children">
            {steps.map((item) => (
              <div
                key={item.step}
                className="reveal group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <span className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
