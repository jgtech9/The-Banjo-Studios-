import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Newsletter from './pages/Newsletter'
import Team from './pages/Team'
import NotFound from './pages/NotFound'

function useScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale'
      )
      elements.forEach((el) => observer.observe(el))
    }, 50)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [location.pathname])
}

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  )

  useScrollReveal()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
