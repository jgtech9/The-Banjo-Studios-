import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-12rem)] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative text-center">
        <h1 className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-800/50">
          404
        </h1>
        <h2 className="reveal text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
          Page Not Found
        </h2>
        <p className="reveal text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto" style={{ animationDelay: '100ms' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="reveal inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          style={{ animationDelay: '200ms' }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
