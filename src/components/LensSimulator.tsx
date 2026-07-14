import React, { useState } from 'react';
import { lensTechs } from '../data/products';

export const LensSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'coatings' | 'tech'>('coatings');
  const [selectedTech, setSelectedTech] = useState(lensTechs[0].id);
  
  // Coatings Simulator State
  const [blueLight, setBlueLight] = useState(false);
  const [antiReflective, setAntiReflective] = useState(true);
  const [transitions, setTransitions] = useState(false);

  const currentTech = lensTechs.find(t => t.id === selectedTech) || lensTechs[0];

  return (
    <section className="lens-simulator-section" id="lens-tech">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">İnteraktif Cam Teknolojisi</span>
          <h2 className="title-serif">Premium Cam Kalitesini Keşfedin</h2>
          <p className="description">
            Dünya lideri ZEISS gibi markalarla iş ortaklığı kurarak yaşam tarzınıza ve göz sağlığınıza uygun en kaliteli cam çözümlerini sunuyoruz.
          </p>
        </div>

        <div className="simulator-grid">
          {/* Visual Interactive Demo */}
          <div className="simulator-demo glass">
            <div className={`demo-scene ${transitions ? 'transitions-active' : ''}`}>
              {/* Simulated Glare/Reflections */}
              {!antiReflective && <div className="glare-reflection"></div>}
              
              {/* Simulated Blue Light Overlay */}
              {blueLight && <div className="blue-filter-overlay"></div>}

              {/* Scene Content */}
              <div className="scene-bg">
                <div className="blur-overlay progressive-blur"></div>
                <div className="scene-content">
                  <div className="scene-card">
                    <h4>Ankara Ulus</h4>
                    <p>İsmet Optik Mağaza Görünümü</p>
                  </div>
                  <div className="scene-badge">
                    {blueLight ? 'Mavi Işık Filtresi AÇIK' : 'Standart Cam'}
                  </div>
                </div>
              </div>
            </div>

            <div className="demo-controls">
              <button 
                className={`control-btn ${blueLight ? 'active' : ''}`}
                onClick={() => setBlueLight(!blueLight)}
              >
                Mavi Işık Filtresi {blueLight ? 'AÇIK' : 'KAPALI'}
              </button>
              <button 
                className={`control-btn ${antiReflective ? 'active' : ''}`}
                onClick={() => setAntiReflective(!antiReflective)}
              >
                Antirefle Kaplama {antiReflective ? 'AÇIK' : 'KAPALI'}
              </button>
              <button 
                className={`control-btn ${transitions ? 'active' : ''}`}
                onClick={() => setTransitions(!transitions)}
              >
                Transitions (UV Uyumlu) {transitions ? 'AÇIK' : 'KAPALI'}
              </button>
            </div>
          </div>

          {/* Details Tabs */}
          <div className="simulator-info glass">
            <div className="tabs-header">
              <button 
                className={`tab-link ${activeTab === 'coatings' ? 'active' : ''}`}
                onClick={() => setActiveTab('coatings')}
              >
                Cam Kaplamaları
              </button>
              <button 
                className={`tab-link ${activeTab === 'tech' ? 'active' : ''}`}
                onClick={() => setActiveTab('tech')}
              >
                Özel Cam Çözümleri
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === 'coatings' ? (
                <div className="tab-pane animate-fade-in">
                  <h3>Görüş Kalitenizi Artıran Kaplamalar</h3>
                  <p className="tab-intro">Gözlüklerinizi gelişmiş koruyucu kaplamalarla kişiselleştirin.</p>
                  <div className="coatings-list">
                    <div className="coating-item">
                      <div className="coating-dot blue-dot"></div>
                      <div>
                        <h4>BlueCut™ Ekran Koruması</h4>
                        <p>Akıllı telefonlar ve bilgisayarlardan gelen zararlı mavi ışığı engeller. Göz yorgunluğunu önler ve uyku kalitesini artırır.</p>
                      </div>
                    </div>
                    <div className="coating-item">
                      <div className="coating-dot reflection-dot"></div>
                      <div>
                        <h4>DuraVision® Premium Antirefle</h4>
                        <p>Yüzey yansımalarını %99 oranında yok eder. Gece sürüş güvenliği ve berrak çerçeve görünümü için vazgeçilmezdir.</p>
                      </div>
                    </div>
                    <div className="coating-item">
                      <div className="coating-dot uv-dot"></div>
                      <div>
                        <h4>Fotokromik Transitions®</h4>
                        <p>Güneş ışığına maruz kaldığında otomatik olarak koyulaşır; iç mekanda berrak, dış mekanda ise güneş gözlüğü işlevi görür.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="tab-pane animate-fade-in">
                  <div className="tech-selector">
                    {lensTechs.map(tech => (
                      <button 
                        key={tech.id}
                        className={`tech-btn ${selectedTech === tech.id ? 'active' : ''}`}
                        onClick={() => setSelectedTech(tech.id)}
                      >
                        {tech.name}
                      </button>
                    ))}
                  </div>

                  <div className="tech-details">
                    <h3>{currentTech.name}</h3>
                    <p className="tech-description">{currentTech.description}</p>
                    
                    <div className="tech-benefits">
                      <h4>Öne Çıkan Faydaları:</h4>
                      <ul>
                        {currentTech.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="tech-specs">
                      {currentTech.features.map((feature, idx) => (
                        <div className="spec-row" key={idx}>
                          <span className="spec-label">{feature.name}</span>
                          <span className="spec-value">{feature.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
