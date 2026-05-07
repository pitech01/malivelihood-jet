import React from 'react'
import logo from '../assets/logo.png'
import aboutHero from '../assets/about_hero_cabin.png'

const RequestAQuote: React.FC = () => {
  const [formData, setFormData] = React.useState({
    from: '',
    to: '',
    departureDate: '',
    passengers: '',
    aircraftCategory: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "2347064603026";
    const text = `*New Quote Request - Malivelihood Jet*%0A%0A` +
      `*Itinerary:* ${formData.from} to ${formData.to}%0A` +
      `*Date:* ${formData.departureDate}%0A` +
      `*Passengers:* ${formData.passengers}%0A` +
      `*Category:* ${formData.aircraftCategory}%0A` +
      `*Client:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Special Needs:* ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="quote-page">
      {/* Hero Styled like About Us */}
      <section className="about-hero" style={{ backgroundImage: `url(${aboutHero})` }}>
        <img src={logo} alt="Malivelihood" className="about-hero-logo reveal" />
        <h1 className="serif-text reveal" style={{ fontSize: '4rem' }}>Request a Quote</h1>
        <p className="reveal" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Complete the form below and our dedicated flight advisors will craft a bespoke itinerary for your journey.
        </p>
      </section>

      <section className="section bg-light">
        <div className="container quote-container">
          {/* Main Form Card */}
          <div className="quote-form-card reveal">
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-step-title">
                <span>Step 01</span>
                <h2>Flight Details</h2>
              </div>

              <div className="itinerary-group">
                <div className="input-wrap">
                  <span className="input-icon">🛫</span>
                  <input type="text" name="from" placeholder="From (Airport or City)" onChange={handleChange} required />
                </div>
                <div className="input-wrap">
                  <span className="input-icon">🛬</span>
                  <input type="text" name="to" placeholder="To (Airport or City)" onChange={handleChange} required />
                </div>
              </div>

              <div className="itinerary-group">
                <div className="form-group">
                  <label>Departure Date <span>*</span></label>
                  <input type="date" name="departureDate" onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Passengers <span>*</span></label>
                  <input type="number" name="passengers" min="1" placeholder="Ex: 4" onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '60px' }}>
                <label>Preferred Aircraft Category</label>
                <select name="aircraftCategory" onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="light">Entry Level / Light Jet (4-7 Pax)</option>
                  <option value="mid">Midsize / Super Midsize (7-9 Pax)</option>
                  <option value="heavy">Heavy / Ultra Long Range (10-16 Pax)</option>
                  <option value="airliner">VIP Airliner (18+ Pax)</option>
                </select>
              </div>

              <div className="form-step-title">
                <span>Step 02</span>
                <h2>Contact Information</h2>
              </div>

              <div className="itinerary-group">
                <div className="form-group">
                  <label>First Name <span>*</span></label>
                  <input type="text" name="firstName" placeholder="John" onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Last Name <span>*</span></label>
                  <input type="text" name="lastName" placeholder="Doe" onChange={handleChange} required />
                </div>
              </div>

              <div className="itinerary-group">
                <div className="form-group">
                  <label>Email Address <span>*</span></label>
                  <input type="email" name="email" placeholder="john@example.com" onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Phone Number <span>*</span></label>
                  <input type="tel" name="phone" placeholder="+234 ..." onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '40px' }}>
                <label>Message / Special Requirements</label>
                <textarea rows={4} name="message" placeholder="Tell us more about your flight needs..." onChange={handleChange}></textarea>
              </div>

              <div className="form-checkboxes" style={{ marginBottom: '40px' }}>
                <label className="checkbox-wrap">
                  <input type="checkbox" />
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>I agree to the processing of my personal data for the purpose of this quote request.</span>
                </label>
              </div>

              <button type="submit" className="btn-elevated" style={{ width: '100%', border: 'none' }}>
                SUBMIT REQUEST
              </button>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className="quote-sidebar reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 className="serif-text">Why Malivelihood?</h3>
            <ul>
              <li>
                <div className="icon-box">✓</div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>Rapid Response</h4>
                  <p>Our advisors are available 24/7 and typically respond to quote requests within 15 minutes.</p>
                </div>
              </li>
              <li>
                <div className="icon-box">✓</div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>Global Fleet Access</h4>
                  <p>Access to over 3,000 aircraft worldwide, from light jets to VIP airliners.</p>
                </div>
              </li>
              <li>
                <div className="icon-box">✓</div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>Transparent Pricing</h4>
                  <p>All-inclusive pricing with no hidden fees. What we quote is what you pay.</p>
                </div>
              </li>
              <li>
                <div className="icon-box">✓</div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>Unrivaled Luxury</h4>
                  <p>Bespoke catering and concierge services tailored to your exact preferences.</p>
                </div>
              </li>
            </ul>

            <div style={{ marginTop: '60px', padding: '30px', background: '#fff', border: '1px solid #eee' }}>
              <h4 style={{ fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '15px' }}>NEED HELP?</h4>
              <p style={{ fontSize: '1.1rem', color: '#000', fontWeight: '500' }}>+234 123 456 7890</p>
              <p style={{ fontSize: '0.85rem', marginTop: '5px' }}>info@malivelihoodjet.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RequestAQuote
