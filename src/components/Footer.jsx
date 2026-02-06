import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white border-t border-gray-700 shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.3)] dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-300 dark:text-primary-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary-300 dark:text-gray-400 dark:hover:text-primary-200 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-300 hover:text-primary-300 dark:text-gray-400 dark:hover:text-primary-200 transition-colors duration-200"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-primary-300 dark:text-gray-400 dark:hover:text-primary-200 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-300 dark:text-primary-200">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-300 hover:text-primary-300 dark:text-gray-400 dark:hover:text-primary-200 transition-colors duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary-300 dark:text-gray-400 dark:hover:text-primary-200 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-300 dark:text-primary-200">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/jgtech9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-300 dark:text-gray-400 dark:hover:text-primary-200 transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-300 dark:text-gray-400 dark:hover:text-primary-200 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-300 dark:text-gray-400 dark:hover:text-primary-200 transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-300 dark:text-primary-200">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <Link
              to="/newsletter"
              className="inline-block bg-primary-300 text-gray-900 px-4 py-2 rounded hover:bg-primary-400 dark:bg-primary-200 dark:text-gray-800 dark:hover:bg-primary-300 transition-colors duration-200"
            >
              Subscribe
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 dark:border-gray-800">
          <p>&copy; {new Date().getFullYear()} The Banjo Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
