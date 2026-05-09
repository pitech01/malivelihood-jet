import React from 'react'
import logo from '../assets/logo.png'
import aboutHero from '../assets/about_hero_cabin.png'

const ContactUs: React.FC = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    frequency: '',
    solution: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "2347064603026";
    const text = `*New Contact Message - Malivelihood Jet*%0A%0A` +
      `*Name:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Frequency:* ${formData.frequency}%0A` +
      `*Current Solution:* ${formData.solution}%0A` +
      `*Message:* ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      {/* Hero Styled like About Us */}
      <section className="about-hero" style={{ backgroundImage: `url(${aboutHero})` }}>
        <img src={logo} alt="Malivelihood" className="about-hero-logo reveal" />
        <h1 className="serif-text reveal">Contact Us</h1>
        <p className="reveal">
          Whether you have a specific travel request or simply wish to learn more about our services, our dedicated team is at your disposal.
        </p>
      </section>

      {/* Upscaled Body UI */}
      <section className="section bg-light">
        <div className="container quote-container">

          {/* Main Contact Form */}
          <div className="quote-form-card reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-step-title">
                <span>GET IN TOUCH</span>
                <h2>Send a Message</h2>
              </div>

              <div className="itinerary-group">
                <div className="form-group">
                  <label>First Name <span>*</span></label>
                  <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Last Name <span>*</span></label>
                  <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                </div>
              </div>

              <div className="itinerary-group">
                <div className="form-group">
                  <label>Email Address <span>*</span></label>
                  <input type="email" name="email" placeholder="email@example.com" onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Phone Number <span>*</span></label>
                  <input type="tel" name="phone" placeholder="+234 ..." onChange={handleChange} required />
                </div>
              </div>

              <div className="itinerary-group">
                <div className="form-group">
                  <label>How often do you fly? <span>*</span></label>
                  <select name="frequency" onChange={handleChange} required>
                    <option value="">Select Frequency</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Current Solution <span>*</span></label>
                  <select name="solution" onChange={handleChange} required>
                    <option value="">Select Option</option>
                    <option value="charter">Charter</option>
                    <option value="own">Ownership</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '40px' }}>
                <label>How can we help you?</label>
                <textarea rows={6} name="message" placeholder="How can we assist you today?" onChange={handleChange}></textarea>
              </div>

              <div className="form-checkboxes" style={{ marginBottom: '40px' }}>
                <label className="checkbox-wrap">
                  <input type="checkbox" />
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>I would like to receive news and updates from Malivelihood Jet.</span>
                </label>
              </div>

              <button type="submit" className="btn-luxury" style={{ width: '100%' }}>
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Details Sidebar */}
          <div className="quote-sidebar reveal" style={{ transitionDelay: '0.2s' }}>
            <div style={{ marginBottom: '60px' }}>
              <h3 className="serif-text">Global Headquarters</h3>
              <p style={{ color: '#666', lineHeight: '1.8' }}>
                Malivelihood Jet Aviation<br />
                Luxury Wing, Terminal 2<br />
                Lagos, Nigeria
              </p>
            </div>

            <div style={{ marginBottom: '60px' }}>
              <h3 className="serif-text">24/7 Concierge</h3>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#888' }}>CENTRAL LINE</h4>
                <p style={{ fontSize: '1.2rem', color: '#000', fontWeight: '500' }}>+234 706 460 3026</p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#888' }}>EMAIL ENQUIRIES</h4>
                <p style={{ fontSize: '1.2rem', color: '#000', fontWeight: '500' }}>info@malivelihoodjet.com</p>
              </div>
            </div>

            <div style={{ marginBottom: '60px' }}>
              <h3 className="serif-text">Media Relations</h3>
              <p style={{ fontSize: '1rem', color: '#666' }}>For all press and media enquiries, please contact our global communications team.</p>
              <p style={{ marginTop: '10px', fontWeight: '500' }}>info@malivelihoodjet.com</p>
            </div>

            <div className="social-links" style={{ justifyContent: 'flex-start', marginTop: '40px' }}>
              <svg style={{ width: '24px', marginRight: '20px', cursor: 'pointer' }} viewBox="0 0 24 24"><path fill="currentColor" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              <svg style={{ width: '24px', marginRight: '20px', cursor: 'pointer' }} viewBox="0 0 24 24"><path fill="currentColor" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
              <svg style={{ width: '24px', cursor: 'pointer' }} viewBox="0 0 24 24"><path fill="currentColor" d="M23 10.9a10.9 10.9 0 0 1-3.14 1.53c.12-.04.24-.09.36-.14a7.72 7.72 0 0 0 1.25-.8 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default ContactUs
