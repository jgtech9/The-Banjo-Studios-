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

export default function Team() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Team
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
          The founders behind The Banjo Studios — a team united by the belief that great software starts with great people.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="pt-8 flex justify-center">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg`}>
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

        {/* Process section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            How We Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Discover', desc: 'Understand your goals and users' },
              { step: '02', title: 'Design', desc: 'Craft intuitive, beautiful interfaces' },
              { step: '03', title: 'Develop', desc: 'Build with modern, scalable tech' },
              { step: '04', title: 'Deploy', desc: 'Launch, monitor, and iterate' },
            ].map((item) => (
              <div key={item.step} className="p-6">
                <span className="text-3xl font-bold text-blue-500/20 dark:text-blue-400/20">{item.step}</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
