import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import logo from './assets/logo.png'
import './App.css'

// Pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import RequestAQuote from './pages/RequestAQuote'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false) // Close menu on route change
    // Scroll handling for header
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
// ... same intersection observer logic

    // Intersection Observer for Reveal Animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => revealObserver.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      revealElements.forEach(el => revealObserver.unobserve(el))
    }
  }, [location.pathname]) // Re-run when page changes to re-observe elements

  return (
    <div className="app-wrapper">
      <ScrollToTop />
      
      {/* Navigation */}
      <header className={`header ${(scrolled || location.pathname !== '/' || menuOpen) ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav">
            <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
            </button>

            <div className="nav-left">
              <Link to="/" className="nav-link">Plan a Flight</Link>
              <Link to="/about" className="nav-link">About Us</Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </div>

            <div className="logo-wrap">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img src={logo} alt="Malivelihood Jet" />
              </Link>
            </div>

            <div className="nav-right">
              <Link to="/quote">
                <button 
                  className="btn-elevated" 
                  style={location.pathname !== '/' ? { background: '#000', border: 'none' } : { padding: '12px 24px', fontSize: '0.6rem' }}
                >
                  REQUEST A QUOTE
                </button>
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-links">
            <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>Plan a Flight</Link>
            <Link to="/about" className="mobile-link" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link to="/quote" className="mobile-link" onClick={() => setMenuOpen(false)}>Request a Quote</Link>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/quote" element={<RequestAQuote />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top reveal">
            <Link to="/"><img src={logo} alt="Malivelihood" className="footer-logo" /></Link>
            <div className="footer-grid five-cols">
              <div className="footer-col">
                <h4>Memberships</h4>
                <ul>
                  <li>Program</li>
                  <li>MJ25</li>
                  <li>Corporate</li>
                  <li>Membership Referrals</li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Fleet</h4>
                <ul>
                  <li>Bombardier</li>
                  <li>Gulfstream</li>
                  <li>Cessna</li>
                  <li>Embraer</li>
                  <li>Dassault</li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Experience</h4>
                <ul>
                  <li>Private World</li>
                  <li>Private Dining</li>
                  <li>Adventures in the sky</li>
                  <li>Malivelihood Pet</li>
                  <li>Wine in the Sky</li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <ul>
                  <li>Legal Information</li>
                  <li>Privacy Notice</li>
                  <li>Cookie Notice</li>
                  <li>Your Privacy Rights</li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Contact Us</h4>
                <ul>
                  <li style={{ textTransform: 'lowercase', opacity: 1 }}>
                    <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>info@malivelihoodjet.com</Link>
                  </li>
                </ul>
                <div className="social-links">
                  <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                  <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 MALIVELIHOOD JET. MALIVELIHOOD JET LOGO® ARE REGISTERED TRADEMARKS OF MALIVELIHOOD. MALIVELIHOOD IS AN AIR CHARTER BROKER AND DOES NOT OPERATE AIRCRAFT DIRECTLY. NIGERIAN REGISTERED AIRCRAFT ARE OPERATED BY LICENSED NIGERIAN AIR CARRIERS.</p>
            <div className="legal-links">
              <span style={{ marginRight: '30px', cursor: 'pointer' }}>Privacy Notice</span>
              <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
