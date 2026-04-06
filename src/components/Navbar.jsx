import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
    document.body.setAttribute('data-navigating', 'true')
    setTimeout(() => {
      document.body.removeAttribute('data-navigating')
    }, 1500)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="https://mitesh.pages.dev/" className="navbar-logo">
          Mitesh.
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          id="nav-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#experience" onClick={handleLinkClick}>Timeline</a>
          <a href='#certifications' onClick={handleLinkClick}>Certifications</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
          <ThemeToggle />
          {/* <a
            href="#"
            className="navbar-resume-btn"
            onClick={handleLinkClick}
            id="resume-btn"
          >
            Resume
          </a> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
