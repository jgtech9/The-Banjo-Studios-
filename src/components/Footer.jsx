import { Link } from 'react-router-dom'

export default function Footer() {
  const linkClass = "text-gray-300 hover:text-primary-300 dark:text-gray-400 dark:hover:text-primary-200 transition-all duration-200 hover:translate-x-1 inline-block"

  return (
    <footer className="bg-gray-800 text-white dark:bg-gray-900">
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-300 dark:text-primary-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className={linkClass}>About Us</Link></li>
              <li><Link to="/team" className={linkClass}>Our Team</Link></li>
              <li><Link to="/privacy" className={linkClass}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-300 dark:text-primary-200">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/portfolio" className={linkClass}>Portfolio</Link></li>
              <li><Link to="/contact" className={linkClass}>Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-300 dark:text-primary-200">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/TheBanjoStudios" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-300 dark:text-primary-200">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <Link
              to="/newsletter"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Subscribe
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700/50 text-center text-gray-400 dark:border-gray-800/50">
          <p>&copy; {new Date().getFullYear()} The Banjo Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
