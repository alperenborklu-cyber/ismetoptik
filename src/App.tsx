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
    service: 'Optik Çerçeve Deneme',
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
      setFormData(prev => ({ ...prev, service: `Deneme Rezervasyonu: ${product.name}` }));
    } else {
      setBookingProduct(null);
      setFormData(prev => ({ ...prev, service: 'Kişisel Gözlük Danışmanlığı' }));
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
      setFormData({ name: '', phone: '', service: 'Optik Çerçeve Deneme', date: '', notes: '' });
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
            <a href="#collections" onClick={() => setMobileMenuOpen(false)}>Koleksiyonlar</a>
            <a href="#lens-tech" onClick={() => setMobileMenuOpen(false)}>Cam Teknolojisi</a>
            <a href="#sgk" onClick={() => setMobileMenuOpen(false)}>SGK Anlaşmaları</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)}>Mağazamız</a>
            <button className="btn-primary btn-nav-cta" onClick={() => { setMobileMenuOpen(false); handleOpenBooking(); }}>
              Randevu Al
            </button>
          </div>

          <button 
            className={`hamburger-menu ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Navigasyon menüsünü aç"
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
            <span className="hero-gold-tag">Kuruluş 1980 • Ankara</span>
            <h1 className="hero-title">
              Hayata Baktığınız <br />
              <span>Pencere Bizim İçin Önemli</span>
            </h1>
            <p className="hero-lead">
              Özenle seçilmiş lüks güneş gözlüklerini ve klinik düzeydeki kişiselleştirilmiş cam teknolojilerini keşfedin. Dünyayı görüşünüzü netleştiren uzmanlık.
            </p>
            <div className="hero-actions">
              <a href="#collections" className="btn-primary">
                Koleksiyonları Keşfet
              </a>
              <button onClick={() => handleOpenBooking()} className="btn-secondary">
                Kişisel Danışmanlık
              </button>
            </div>

            {/* Quick stats / trust banners */}
            <div className="hero-badges">
              <div className="badge-item">
                <span className="badge-value">40+ Yıl</span>
                <span className="badge-label">Sektör Tecrübesi</span>
              </div>
              <div className="badge-divider"></div>
              <div className="badge-item">
                <span className="badge-value">SGK</span>
                <span className="badge-label">Anlaşmalı Kurum</span>
              </div>
              <div className="badge-divider"></div>
              <div className="badge-item">
                <span className="badge-value">ZEISS</span>
                <span className="badge-label">Sertifikalı Optik Cam</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img 
                src={luxurySunglasses} 
                alt="Lüks Güneş Gözlüğü Modeli" 
                className="hero-img-main"
              />
              <div className="hero-image-overlay"></div>
              <div className="hero-glass-card glass">
                <span className="card-label">Şu An Popüler</span>
                <h4>Aero Gold Aviator</h4>
                <p>Sınırlı Sayıda Titanyum Koleksiyonu</p>
                <div className="card-row">
                  <span className="price">₺7,450</span>
                  <button onClick={() => handleOpenBooking(products[0])} className="card-cta">Rezerve Et</button>
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
            <span className="subtitle">Özel Seçki Gözlükler</span>
            <h2 className="title-serif">Yüksek Moda Galerisi</h2>
            <p className="description-centered">
              Hafif ergonomi ile avangart estetiği bir araya getiren dünyaca ünlü el yapımı markalar ve çerçeveler.
            </p>

            <div className="filter-tabs">
              <button 
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                Tüm Koleksiyonlar
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'sunglasses' ? 'active' : ''}`}
                onClick={() => setActiveCategory('sunglasses')}
              >
                Güneş Gözlükleri
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'optical' ? 'active' : ''}`}
                onClick={() => setActiveCategory('optical')}
              >
                Optik Çerçeveler
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
              <h2 className="title-serif">Devlet Destekli Optik Çözümleri</h2>
              <p>
                İsmet Optik, SGK (Sosyal Güvenlik Kurumu) ile tam anlaşmalı bir kuruluştur. Resmi reçetelerinizi kullanarak devlet destekli optik gözlük çerçevesi ve cam indirimlerinden anında yararlanabilirsiniz.
              </p>
              <div className="sgk-list">
                <div className="sgk-item">
                  <strong>✓ Reçeteleriniz Geçerlidir</strong>
                  <span>Kamu ve özel hastanelerden alınan resmi göz reçeteleri anında sisteme işlenir.</span>
                </div>
                <div className="sgk-item">
                  <strong>✓ Kolay İşlem Entegrasyonu</strong>
                  <span>Optisyenlerimiz, devletinizin sağladığı katkı payı indirimini kasada doğrudan fiyattan düşer.</span>
                </div>
              </div>
              <div className="sgk-actions">
                <a 
                  href="https://wa.me/905423245712?text=Merhaba%20Ismet%20Optik%2C%20SGK%20anla%C5%9Fmal%C4%B1%20re%C3%A7eteli%20g%C3%B6zl%C3%BCk%20i%C5%9Flemleri%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                >
                  SGK Hakkınızı Sorgulayın
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
              <span className="subtitle">Mağazamıza Bekliyoruz</span>
              <h2 className="title-serif">Ankara'nın Merkezinde, Ulus'tayız</h2>
              <p className="loc-intro">
                Lüks çerçeveleri yakından görmek ve profesyonel optik odak ölçümü hizmeti almak için showroomumuzu ziyaret edin.
              </p>
              
              <div className="contact-details-box">
                <div className="contact-row">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Adres</h4>
                    <p>Anafartalar Caddesi 68/C, Ulus-Altındağ / Ankara</p>
                  </div>
                </div>
                
                <div className="contact-row">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Sabit Telefon</h4>
                    <p><a href="tel:+903123245712">0312 324 57 12</a></p>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon">💬</div>
                  <div>
                    <h4>WhatsApp Destek Hattı</h4>
                    <p><a href="tel:+905423245712">0542 324 57 12</a></p>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon">⏰</div>
                  <div>
                    <h4>Çalışma Saatleri</h4>
                    <p>Pazartesi - Cumartesi: 09:00 - 19:30 • Pazar: Kapalı</p>
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
                  Yol Tarifi Al
                </a>
                <a href="tel:+905423245712" className="btn-secondary">
                  Hemen Ara
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
                    Google Haritalarda Aç
                  </a>
                </div>
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
              <p>1980 yılından beri Ankara'da üstün kaliteli gözlük çerçeveleri ve reçeteli mercek hassasiyeti ile hizmet veriyoruz.</p>
            </div>
            <div className="footer-links">
              <h4>Koleksiyonlar</h4>
              <a href="#collections">Moda Güneş Gözlükleri</a>
              <a href="#collections">Optik Çerçeveler</a>
              <a href="#lens-tech">ZEISS MyoCare Çözümleri</a>
            </div>
            <div className="footer-links">
              <h4>Destek</h4>
              <a href="#sgk">SGK Kapsamı ve Bilgisi</a>
              <a href="#location">İletişim ve Mağaza</a>
              <a href="tel:+905423245712">WhatsApp Destek Hattı</a>
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
                <h3>Rezervasyonunuz Alındı!</h3>
                <p>Talebinizi aldık. Optisyenlerimiz randevunuzu onaylamak için kısa süre içinde WhatsApp üzerinden sizinle iletişime geçecektir.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="booking-form">
                <h3 className="form-title">Danışmanlık Randevusu</h3>
                <p className="form-subtitle">
                  {bookingProduct ? `VIP Deneme Rezervasyonu: ${bookingProduct.name}` : 'Kişisel gözlük seçimi veya reçeteli cam danışmanlığı için yerinizi ayırtın.'}
                </p>

                <div className="form-group">
                  <label htmlFor="name">Ad Soyad</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="Ahmet Yılmaz"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefon Numarası (WhatsApp Tercih Edilir)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    placeholder="Örn: 0542 324 57 12"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Talep Edilen Hizmet</label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="Kişisel Gözlük Danışmanlığı">Kişisel Gözlük Danışmanlığı</option>
                    <option value="ZEISS MyoCare Miyopi Danışmanlığı">ZEISS MyoCare Miyopi Danışmanlığı</option>
                    <option value="SGK Reçete İşlemleri">SGK Reçete İşlemleri</option>
                    {bookingProduct && <option value={`Deneme Rezervasyonu: ${bookingProduct.name}`}>Deneme Rezervasyonu: {bookingProduct.name}</option>}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="date">Tercih Edilen Tarih ve Saat</label>
                  <input 
                    type="datetime-local" 
                    id="date" 
                    required
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Ek Notlar (İsteğe Bağlı)</label>
                  <textarea 
                    id="notes" 
                    rows={2}
                    placeholder="Reçete numaranız, tercih ettiğiniz çerçeve tarzı veya sormak istedikleriniz..."
                    value={formData.notes}
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">Randevuyu Onayla</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
