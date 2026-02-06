import { useState } from 'react'

    export default function Newsletter() {
      const [email, setEmail] = useState('')
      const [subscribed, setSubscribed] = useState(false)

      const handleSubmit = (e) => {
        e.preventDefault()

        // Save email to local storage
        const emails = JSON.parse(localStorage.getItem('newsletterEmails') || '[]')
        emails.push(email)
        localStorage.setItem('newsletterEmails', JSON.stringify(emails))

        // Clear the input and show success message
        setEmail('')
        setSubscribed(true)
      }

      return (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Newsletter Sign-Up
            </h1>
            {subscribed ? (
              <p className="text-green-600 dark:text-green-400 text-lg">
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-primary-300 hover:bg-primary-400 px-4 py-2 rounded-lg w-full dark:bg-primary-200 dark:hover:bg-primary-300 dark:text-gray-800 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      )
    }
