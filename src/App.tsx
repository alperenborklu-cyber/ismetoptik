import React, { useState } from 'react';
import { products, type Product } from './data/products';
import { ProductCard } from './components/ProductCard';
import { LensSimulator } from './components/LensSimulator';
import luxurySunglasses from './assets/luxury_sunglasses_hero.png';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sunglasses' | 'optical'>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingProduct, setBookingProduct] = useState<Product | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Optical Frame Try-on',
    date: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleOpenBooking = (product?: Product) => {
    if (product) {
      setBookingProduct(product);
      setFormData(prev => ({ ...prev, service: `Try-On Reservation: ${product.name}` }));
    } else {
      setBookingProduct(null);
      setFormData(prev => ({ ...prev, service: 'Personal Eyewear Consultation' }));
    }
    setIsBookingOpen(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsBookingOpen(false);
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', service: 'Optical Frame Try-on', date: '', notes: '' });
    }, 3000);
  };

  return (
    <div className="app-wrapper">
      {/* Premium Navbar */}
      <nav className="navbar glass">
        <div className="navbar-container">
          <a href="#" className="nav-logo">
            İSMET <span>OPTİK</span>
          </a>

          <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
            <a href="#collections" onClick={() => setMobileMenuOpen(false)}>Collections</a>
            <a href="#lens-tech" onClick={() => setMobileMenuOpen(false)}>Lens Technology</a>
            <a href="#sgk" onClick={() => setMobileMenuOpen(false)}>SGK Partners</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)}>Our Store</a>
            <button className="btn-primary btn-nav-cta" onClick={() => { setMobileMenuOpen(false); handleOpenBooking(); }}>
              Book Appointment
            </button>
          </div>

          <button 
            className={`hamburger-menu ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content animate-fade-in">
            <span className="hero-gold-tag">Established 1980 • Ankara</span>
            <h1 className="hero-title">
              Hayata Baktığınız <br />
              <span>Pencere Bizim İçin Önemli</span>
            </h1>
            <p className="hero-lead">
              Discover curated luxury sunglasses and clinical-grade custom lens technology. Tailored expertise to redefine how you view the world.
            </p>
            <div className="hero-actions">
              <a href="#collections" className="btn-primary">
                Explore Collections
              </a>
              <button onClick={() => handleOpenBooking()} className="btn-secondary">
                Personal Consultation
              </button>
            </div>

            {/* Quick stats / trust banners */}
            <div className="hero-badges">
              <div className="badge-item">
                <span className="badge-value">40+</span>
                <span className="badge-label">Years Excellence</span>
              </div>
              <div className="badge-divider"></div>
              <div className="badge-item">
                <span className="badge-value">SGK</span>
                <span className="badge-label">Contracted Partner</span>
              </div>
              <div className="badge-divider"></div>
              <div className="badge-item">
                <span className="badge-value">ZEISS</span>
                <span className="badge-label">Certified Lenses</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img 
                src={luxurySunglasses} 
                alt="Luxury Fashion Sunglasses Model" 
                className="hero-img-main"
              />
              <div className="hero-image-overlay"></div>
              <div className="hero-glass-card glass">
                <span className="card-label">Trending Now</span>
                <h4>Aero Gold Aviator</h4>
                <p>Limited Titanium Release</p>
                <div className="card-row">
                  <span className="price">₺7,450</span>
                  <button onClick={() => handleOpenBooking(products[0])} className="card-cta">Reserve</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections-section" id="collections">
        <div className="container">
          <div className="section-header-centered">
            <span className="subtitle">Curated Eyewear</span>
            <h2 className="title-serif">The High-Fashion Gallery</h2>
            <p className="description-centered">
              Hand-selected international frames combining lightweight ergonomics with avant-garde aesthetics.
            </p>

            <div className="filter-tabs">
              <button 
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Collections
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'sunglasses' ? 'active' : ''}`}
                onClick={() => setActiveCategory('sunglasses')}
              >
                Sunglasses
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'optical' ? 'active' : ''}`}
                onClick={() => setActiveCategory('optical')}
              >
                Optical Frames
              </button>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBookTryOn={handleOpenBooking}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lens Simulator Component */}
      <LensSimulator />

      {/* SGK & Partnerships Section */}
      <section className="sgk-section" id="sgk">
        <div className="container">
          <div className="sgk-card glass">
            <div className="sgk-info">
              <div className="partner-logo">SGK</div>
              <h2 className="title-serif">State-Backed Optical Benefits</h2>
              <p>
                İsmet Optik is a fully contracted SGK partner. Turkish citizens can apply their state health benefits to redeem prescription optical glasses, lenses, and frame subsidies.
              </p>
              <div className="sgk-list">
                <div className="sgk-item">
                  <strong>✓ Prescriptions Accepted</strong>
                  <span>Valid prescriptions from public & private hospitals are instantly processed.</span>
                </div>
                <div className="sgk-item">
                  <strong>✓ Seamless Integration</strong>
                  <span>Our opticians calculate your state coverage deduction directly at checkout.</span>
                </div>
              </div>
              <div className="sgk-actions">
                <a 
                  href="https://wa.me/905423245712?text=Hello%20Ismet%20Optik%2C%20I'd%20like%20to%20inquire%20about%20SGK%20covered%20prescription%20glasses." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                >
                  Verify Your SGK Benefit
                </a>
              </div>
            </div>
            <div className="sgk-visual">
              <div className="gradient-glow"></div>
              <div className="sgk-badge">Anlaşmalı Kurum</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Store Contact Info */}
      <section className="location-section" id="location">
        <div className="container">
          <div className="location-grid">
            <div className="location-details">
              <span className="subtitle">Visit Our Store</span>
              <h2 className="title-serif">Located in the Heart of Ankara</h2>
              <p className="loc-intro">
                Experience luxury frames and professional optical fitting firsthand at our Ulus showroom.
              </p>
              
              <div className="contact-details-box">
                <div className="contact-row">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Address</h4>
                    <p>Anafartalar Caddesi 68/C, Ulus-Altındağ / Ankara</p>
                  </div>
                </div>
                
                <div className="contact-row">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Store Phone</h4>
                    <p><a href="tel:+903123245712">0312 324 57 12</a></p>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon">💬</div>
                  <div>
                    <h4>WhatsApp Mobile Support</h4>
                    <p><a href="tel:+905423245712">0542 324 57 12</a></p>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon">⏰</div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Monday - Saturday: 09:00 - 19:30 • Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="location-cta-group">
                <a 
                  href="https://maps.google.com/?q=Anafartalar+Caddesi+68/C+Ulus+Altindag+Ankara" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                >
                  Get Directions
                </a>
                <a href="tel:+905423245712" className="btn-secondary">
                  Call Now
                </a>
              </div>
            </div>

            <div className="location-map glass">
              <div className="map-placeholder">
                <div className="map-overlay">
                  <div className="map-pin">📍</div>
                  <h4>İsmet Optik ve Saat</h4>
                  <p>Anafartalar Cd. No: 68/C</p>
                  <a 
                    href="https://maps.google.com/?q=Anafartalar+Caddesi+68/C+Ulus+Altindag+Ankara" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-map"
                  >
                    Open Google Maps
                  </a>
                </div>
                {/* Elegant abstract pattern representing map grid */}
                <div className="grid-overlay-map"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>İSMET OPTİK</h3>
              <p>Providing premium optical frame styling and prescription precision since 1980.</p>
            </div>
            <div className="footer-links">
              <h4>Collections</h4>
              <a href="#collections">High Fashion Sunglasses</a>
              <a href="#collections">Modern Optical Frames</a>
              <a href="#lens-tech">Zeiss MyoCare Solutions</a>
            </div>
            <div className="footer-links">
              <h4>Support</h4>
              <a href="#sgk">SGK Coverage Information</a>
              <a href="#location">Contact & Location</a>
              <a href="tel:+905423245712">WhatsApp Support</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 İsmet Optik ve Saat - Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal / Drawer */}
      {isBookingOpen && (
        <div className="booking-modal-overlay">
          <div className="booking-modal-container glass animate-fade-in">
            <button className="modal-close-btn" onClick={() => setIsBookingOpen(false)}>×</button>
            
            {formSubmitted ? (
              <div className="booking-success-message">
                <span className="success-icon">✓</span>
                <h3>Reservation Confirmed!</h3>
                <p>We have reserved your slot. One of our master opticians will text you via WhatsApp to verify your appointment shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="booking-form">
                <h3 className="form-title">Reserve a Consultation</h3>
                <p className="form-subtitle">
                  {bookingProduct ? `Booking VIP try-on reservation for: ${bookingProduct.name}` : 'Request a personal fitting or prescription consultation.'}
                </p>

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number (WhatsApp Preferred)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    placeholder="e.g. +90 542 324 57 12"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Requested Service</label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="Personal Eyewear Consultation">Personal Eyewear Consultation</option>
                    <option value="ZEISS MyoCare Consultation">ZEISS MyoCare Consultation</option>
                    <option value="SGK Prescription Processing">SGK Prescription Processing</option>
                    {bookingProduct && <option value={`Try-On Reservation: ${bookingProduct.name}`}>Try-On Reservation: {bookingProduct.name}</option>}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="date">Preferred Date & Time</label>
                  <input 
                    type="datetime-local" 
                    id="date" 
                    required
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Additional Requests (Optional)</label>
                  <textarea 
                    id="notes" 
                    rows={2}
                    placeholder="Tell us about your lens prescription or style preference..."
                    value={formData.notes}
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">Confirm Booking Slot</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
