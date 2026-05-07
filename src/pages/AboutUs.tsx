import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import fleet1 from '../assets/fleet1.png'
import heroImg from '../assets/hero.png'
import diningImg from '../assets/dining.png'

// Generated Images
import aboutHero from '../assets/about_hero_cabin.png'
import hqBuilding from '../assets/modern_hq_building.png'
import jetsDusk from '../assets/jets_dusk_wide.png'
import jetHeadOn from '../assets/jet_head_on_sunset.png'
import personInJet from '../assets/luxury_business_jet_person.png'

const AboutUs: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero" style={{ backgroundImage: `url(${aboutHero})` }}>
        <img src={logo} alt="Malivelihood" className="about-hero-logo reveal" />
        <h1 className="serif-text reveal">About Malivelihood Jet</h1>
        <p className="reveal">Malivelihood Jet was established with a clear objective: to provide a better, faster, and more personal way to fly.</p>
      </section>

      {/* Section 1: History */}
      <section className="section bg-white">
        <div className="container">
          <div className="about-split reveal">
            <div className="text-side">
              <span className="eyebrow">OUR STORY</span>
              <h2 className="serif-text">A Vision of <br />Unrivaled Excellence.</h2>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem' }}>
                With a deep understanding of the needs of the world’s most discerning travelers, Malivelihood Jet has redefined the standards of private aviation. We don't just provide a service; we deliver an experience that begins long before you reach the runway.
              </p>
            </div>
            <div className="image-side overlap-image-container">
              <img src={hqBuilding} alt="Office" className="overlap-image-main" />
            </div>
          </div>
          
          <img src={jetsDusk} alt="Jets at Dusk" className="wide-cinematic-img reveal" />
        </div>
      </section>

      {/* Section 2: Commitment */}
      <section className="section bg-light">
        <div className="container">
          <div className="about-split reverse reveal">
            <div className="image-side">
              <img src={jetHeadOn} alt="Jet at Sunset" className="overlap-image-main" />
            </div>
            <div className="text-side">
              <span className="eyebrow">COMMITMENT</span>
              <h2 className="serif-text">Your Time, <br />Perfectly Managed.</h2>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem' }}>
                We believe that true luxury is the freedom to focus on what matters most. Our dedicated concierge team works tirelessly to ensure that every detail of your journey is handled with absolute precision and discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-section bg-white">
        <div className="container">
          <div className="text-center reveal">
            <span className="eyebrow">OUR SERVICES</span>
            <h2 className="serif-text">Tailored Aviation Solutions</h2>
          </div>

          <div className="solutions-grid">
            <div className="solution-card reveal">
              <img src={fleet1} alt="Private Jet" />
              <div className="solution-info">
                <h3>Private Jet Charter</h3>
                <p>Personalized travel experiences on a global scale, providing direct access to over 300 ultra-luxury aircraft.</p>
              </div>
            </div>
            <div className="solution-card reveal" style={{ transitionDelay: '0.2s' }}>
              <img src={heroImg} alt="Acquisition" />
              <div className="solution-info">
                <h3>Aircraft Acquisition</h3>
                <p>Expert guidance through the complex process of purchasing and customizing your own private jet.</p>
              </div>
            </div>
            <div className="solution-card reveal" style={{ transitionDelay: '0.4s' }}>
              <img src={diningImg} alt="Management" />
              <div className="solution-info">
                <h3>Aircraft Management</h3>
                <p>Comprehensive management solutions that maximize the value and operational efficiency of your aircraft.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expect the Best */}
      <section className="section bg-white" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="about-split reveal" style={{ gap: '0' }}>
            <div className="image-side" style={{ flex: '1.2' }}>
              <img src={personInJet} alt="Premium Experience" className="about-experience-img" />
            </div>
            <div className="text-side about-experience-text" style={{ flex: '1' }}>
              <span className="eyebrow">UNMATCHED SERVICE</span>
              <h2 className="serif-text experience-title">Expertise You Can Trust</h2>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.2rem', marginBottom: '2rem' }}>
               Dr. Micheal Olushola Awujoola: CEO – With over 15 years of experience in private avaition and delivering high luxury services and goods to the 1% of the 1% across Africa, America and Europe, The Black Jeweler leads our team with a focus on client satisfaction and operational excellence.
              </p>
              <ul className="luxury-list">
                <li>Personalized Cabin Configuration</li>
                <li>Gourmet Cuisine Prepared On-Board</li>
                <li>Absolute Privacy and Security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Section - Dark */}
      <section className="advantage-section">
        <div className="container">
          <div className="advantage-grid reveal">
            <div className="advantage-img">
              <img src={fleet1} alt="Jet Advantage" />
            </div>
            <div className="advantage-content">
              <span className="eyebrow" style={{ color: '#fff' }}>WHY MALIVELIHOOD?</span>
              <h2 className="serif-text" style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '3rem' }}>The Malivelihood Advantage</h2>
              
              <div className="advantage-features">
                <div className="advantage-item">
                  <h4>GLOBAL REACH</h4>
                  <p>Access to a global network of premier airports and exclusive FBO terminals worldwide.</p>
                </div>
                <div className="advantage-item">
                  <h4>SAFETY FIRST</h4>
                  <p>Adherence to the highest international safety standards and rigorous maintenance protocols.</p>
                </div>
                <div className="advantage-item">
                  <h4>24/7 SUPPORT</h4>
                  <p>A dedicated team available around the clock to handle requests and ensure smooth operations.</p>
                </div>
                <div className="advantage-item">
                  <h4>BESPOKE EXPERIENCE</h4>
                  <p>Every flight is tailored to your specific preferences, from dining to entertainment.</p>
                </div>
                <div className="advantage-item">
                  <h4>FLIGHT MONITORING</h4>
                  <p>Real-time tracking and pro-active management of every flight mission for peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta bg-white reveal">
        <div className="container mini-container">
          <span>FEEL THE DIFFERENCE</span>
          <h2 className="serif-text">Contact our advisors to discuss your flight options or find out more about our services.</h2>
          <Link to="/contact">
            <button className="btn-elevated">CONTACT US</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
