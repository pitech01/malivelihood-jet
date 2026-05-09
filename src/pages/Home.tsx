import React from 'react'
import { Link } from 'react-router-dom'
import fleet1 from '../assets/fleet1.png'
import heroImg from '../assets/hero.png'
import diningImg from '../assets/dining.png'
import connectivityImg from '../assets/connectivity.png'

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-content">
          <span className="hero-tag">THE PRIVILEGE OF PRIVACY</span>
          <h1>The Luxury <br /> of Choice.</h1>
          <div className="hero-cta">
            <Link to="/fleet"><button className="btn-elevated white">EXPLORE FLEET</button></Link>
            <Link to="/about"><button className="btn-outline" style={{ padding: '18px 45px' }}>LEARN MORE</button></Link>
          </div>
        </div>
      </section>

      {/* Asymmetric Plan a Trip Intro */}
      <section className="section bg-textured">
        <div className="container asymmetric-intro reveal">
          <div className="intro-main">
            <span className="eyebrow">PLAN A FLIGHT</span>
            <h2 className="serif-text">Elevating Every <br /> Mile You Fly.</h2>
            <p className="luxury-text" style={{ fontSize: '1.4rem', color: '#555', maxWidth: '600px', lineHeight: '1.6' }}>
              Safe, fast and reliable private jet charters around the world. Book your flight and fly at your convenience with access to over 300 aircraft worldwide.
            </p>
            <div className="intro-action">
              <Link to="/quote"><button className="btn-elevated">BOOK YOUR FLIGHT</button></Link>
            </div>
          </div>

          <div className="feature-list">
            <div className="feature-item">
              <span>THE LUXURY EXPERIENCE</span>
              <p>Global network of 300+ ultra-luxury jets at your command.</p>
              <span className="tag">UNLIMITED ACCESS</span>
            </div>
            <div className="feature-item">
              <span>24/7 CONCIERGE SUPPORT</span>
              <p>Direct access to your dedicated lifestyle manager, anytime.</p>
              <span className="tag">BESPOKE SERVICE</span>
            </div>
            <div className="feature-item">
              <span>INSTANT AVAILABILITY</span>
              <p>From request to take-off in under 2 hours, anywhere on earth.</p>
              <span className="tag">SPEED REFINED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '80px' }}>
            <span className="eyebrow">ELITE FLEET</span>
            <h2 className="luxury-text">Unrivaled service as standard.</h2>
          </div>

          <div className="membership-grid">
            <div className="member-card reveal">
              <div className="img-reveal-wrap"><img src={fleet1} alt="Program" /></div>
              <h3>01. PROGRAM</h3>
              <p>The perfect solution for frequent fliers. Access our fleet with guaranteed availability whenever you need it most.</p>
            </div>
            <div className="member-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="img-reveal-wrap"><img src={heroImg} alt="MJ25" /></div>
              <h3>02. MJ25</h3>
              <p>The most flexible way to access a private jet. No long-term commitments, just pure convenience and style.</p>
            </div>
            <div className="member-card reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="img-reveal-wrap"><img src={diningImg} alt="Corporate" /></div>
              <h3>03. CORPORATE</h3>
              <p>Tailored solutions for your business. Dedicated support for global travel needs and executive productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global 7500 Feature */}
      <section className="section bg-white">
        <div className="container">
          <div className="split">
            <div className="split-media reveal">
              <img src={fleet1} alt="Global 7500" />
            </div>
            <div className="split-info reveal">
              <span className="eyebrow">ELITE FLEET</span>
              <h2>Global 7500. <br />The Flagship.</h2>
              <p>Setting the record for the fastest and longest flight in business aviation history. Experience the industry's largest cabin and smoothest ride at 45,000 feet.</p>
              <button className="btn-elevated">EXPLORE FLEET</button>
            </div>
          </div>
        </div>
      </section>

      {/* Private Dining Banner */}
      <section className="full-banner reveal" style={{ backgroundImage: `url(${diningImg})` }}>
        <div className="full-banner-overlay"></div>
        <div className="container banner-inner">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>EXPERIENCE</span>
          <h2 className="serif-text" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>A table higher than Mount Everest.</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.8 }}>We Have transformed the private dining experience in the air. Cherish time together on board while exploring the art and science of fine dining.</p>
          <button className="btn-elevated white">FLY NOW</button>
        </div>
      </section>

      {/* Service Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="split reverse">
            <div className="split-media reveal">
              <img src={connectivityImg} alt="Service" />
            </div>
            <div className="split-info reveal">
              <span className="eyebrow">UNRIVALED SERVICE</span>
              <h2>Trained for <br />Excellence.</h2>
              <p>Our cabin crew is trained by the British Butler Institute, Norland College, and Wine & Spirit Education Trust to provide a service that is truly second to none.</p>
              <button className="btn-elevated">LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section bg-light">
        <div className="container reveal mini-container text-center">
          <span className="eyebrow">SUSTAINABILITY</span>
          <h2 className="luxury-text">Committed to making aviation better.</h2>
          <p style={{ color: '#666', marginBottom: '3rem' }}>We are leading the way in environmental initiatives, from carbon offset programs to sustainable aviation fuel integration.</p>
          <button className="btn-elevated">OUR COMMITMENT</button>
        </div>
      </section>
    </>
  )
}

export default Home
