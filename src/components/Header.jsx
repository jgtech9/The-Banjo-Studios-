import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleTheme = () => setDarkMode(!darkMode)

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  const ThemeIcon = () =>
    darkMode ? (
      <svg className="w-5 h-5 text-amber-300 transition-transform duration-300 hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ) : (
      <svg className="w-5 h-5 text-blue-200 transition-transform duration-300 hover:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )

  return (
    <header className="bg-gray-900/95 backdrop-blur-md text-gray-50 shadow-lg shadow-black/10 sticky top-0 z-50 border-b border-gray-700/50 dark:bg-gray-950/95 dark:border-gray-800/50 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-2xl sm:text-3xl font-bold text-gray-50 dark:text-primary-200 transform transition-all duration-300 hover:scale-105 hover:text-primary-300 dark:hover:text-primary-200">
                The Banjo Studios
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={toggleTheme}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <ThemeIcon />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(link.to)
                    ? "text-white dark:text-primary-200 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-0.5 after:bg-blue-400 after:rounded-full"
                    : 'text-gray-300 hover:text-primary-300 dark:hover:text-primary-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={toggleTheme}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <ThemeIcon />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-1 border-t border-gray-700/50 dark:border-gray-800/50">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive(link.to)
                  ? 'text-primary-300 dark:text-primary-200 bg-white/5'
                  : 'text-gray-300 hover:text-primary-300 dark:hover:text-primary-200 hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
