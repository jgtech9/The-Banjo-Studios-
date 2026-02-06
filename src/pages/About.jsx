export default function About() {
      return (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              About The Banjo Studios
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  To deliver innovative software solutions that empower businesses and delight users.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Excellence</li>
                  <li>Creativity</li>
                  <li>Collaboration</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Our Expertise</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  React, Node.js, Tailwind CSS, and modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
