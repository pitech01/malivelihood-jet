import React from 'react'
import logo from '../assets/logo.png'
import fleet1 from '../assets/fleet1.png'
import heroImg from '../assets/hero.png'
import diningImg from '../assets/dining.png'

const Fleet: React.FC = () => {
  const categories = [
    {
      id: 'light',
      name: 'Light & Super Light',
      description: 'Ideal for regional travel and smaller groups who prioritize efficiency without compromising on elegance.',
      pax: '4-7',
      range: '2,500 nm',
      jets: [
        { name: 'Cessna Citation CJ3', img: fleet1 },
        { name: 'Phenom 300E', img: fleet1 }
      ]
    },
    {
      id: 'mid',
      name: 'Midsize & Super Midsize',
      description: 'The perfect balance of range, speed, and cabin comfort. Designed for transcontinental journeys.',
      pax: '7-9',
      range: '3,500 nm',
      jets: [
        { name: 'Challenger 350', img: heroImg },
        { name: 'Praetor 600', img: fleet1 }
      ]
    },
    {
      id: 'heavy',
      name: 'Heavy & Ultra Long Range',
      description: 'The pinnacle of private aviation. Global reach with multiple living areas and full-service galleys.',
      pax: '10-16',
      range: '7,500 nm',
      jets: [
        { name: 'Global 7500', img: fleet1 },
        { name: 'Gulfstream G650ER', img: diningImg }
      ]
    }
  ]

  return (
    <div className="fleet-page">
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <img src={logo} alt="Malivelihood" className="about-hero-logo reveal" />
        <h1 className="serif-text reveal">Our Elite Fleet</h1>
        <p className="reveal" style={{ maxWidth: '700px', margin: '0 auto' }}>
          Access a world-class selection of over 300 aircraft, meticulously maintained and curated for the most discerning travelers.
        </p>
      </section>

      {/* Fleet Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '100px' }}>
            <span className="eyebrow">AIRCRAFT CATEGORIES</span>
            <h2 className="luxury-text">The right aircraft for every mission.</h2>
          </div>

          {categories.map((cat, index) => (
            <div key={cat.id} className={`fleet-category-block reveal ${index % 2 !== 0 ? 'reverse' : ''}`} style={{ marginBottom: '120px' }}>
              <div className="fleet-cat-info">
                <span className="cat-number">0{index + 1}</span>
                <h3 className="serif-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{cat.name}</h3>
                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '2.5rem' }}>{cat.description}</p>
                
                <div className="cat-specs">
                  <div className="spec-item">
                    <span className="spec-label">PASSENGERS</span>
                    <span className="spec-val">UP TO {cat.pax}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">MAX RANGE</span>
                    <span className="spec-val">{cat.range}</span>
                  </div>
                </div>

                <button className="btn-luxury" style={{ marginTop: '40px' }}>ENQUIRE NOW</button>
              </div>

              <div className="fleet-cat-visual">
                <div className="main-jet-img">
                  <img src={cat.jets[0].img} alt={cat.name} />
                  <div className="img-overlay-label">{cat.jets[0].name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section bg-light">
        <div className="container reveal">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 className="serif-text" style={{ fontSize: '3rem' }}>Fleet Comparison</h2>
          </div>
          <div className="fleet-table-wrap">
            <table className="fleet-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Typical Aircraft</th>
                  <th>Range</th>
                  <th>Speed</th>
                  <th>Cabin Height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Light Jet</td>
                  <td>Phenom 300 / CJ3</td>
                  <td>2,000 nm</td>
                  <td>450 kts</td>
                  <td>4' 9"</td>
                </tr>
                <tr>
                  <td>Midsize</td>
                  <td>Challenger 350 / Praetor 600</td>
                  <td>3,200 nm</td>
                  <td>470 kts</td>
                  <td>6' 0"</td>
                </tr>
                <tr>
                  <td>Heavy</td>
                  <td>Global 6000 / G550</td>
                  <td>6,000 nm</td>
                  <td>490 kts</td>
                  <td>6' 2"</td>
                </tr>
                <tr>
                  <td>Ultra Long Range</td>
                  <td>Global 7500 / G650ER</td>
                  <td>7,500 nm</td>
                  <td>510 kts</td>
                  <td>6' 3"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Global Reach Banner */}
      <section className="full-banner reveal" style={{ backgroundImage: `url(${diningImg})`, height: '60vh' }}>
        <div className="full-banner-overlay"></div>
        <div className="container banner-inner">
          <h2 className="serif-text" style={{ fontSize: '3rem' }}>Global reach, local expertise.</h2>
          <p style={{ marginTop: '20px', opacity: 0.8 }}>Wherever you are in the world, Malivelihood has the perfect aircraft waiting for you.</p>
          <button className="btn-luxury" style={{ marginTop: '40px', background: 'transparent' }}>REQUEST A QUOTE</button>
        </div>
      </section>
    </div>
  )
}

export default Fleet
