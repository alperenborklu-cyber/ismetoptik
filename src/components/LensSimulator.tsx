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
          <span className="subtitle">Interactive Lens Technology</span>
          <h2 className="title-serif">See the Difference in Premium Glass</h2>
          <p className="description">
            We partner with world-leaders like ZEISS and Essilor to provide clinical-grade vision solutions tailored to your life.
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
                    <p>İsmet Optik Storefront View</p>
                  </div>
                  <div className="scene-badge">
                    {blueLight ? 'Blue Cut Filter ON' : 'Standard Lens'}
                  </div>
                </div>
              </div>
            </div>

            <div className="demo-controls">
              <button 
                className={`control-btn ${blueLight ? 'active' : ''}`}
                onClick={() => setBlueLight(!blueLight)}
              >
                Blue Light Filter {blueLight ? 'ON' : 'OFF'}
              </button>
              <button 
                className={`control-btn ${antiReflective ? 'active' : ''}`}
                onClick={() => setAntiReflective(!antiReflective)}
              >
                Anti-Reflective {antiReflective ? 'ON' : 'OFF'}
              </button>
              <button 
                className={`control-btn ${transitions ? 'active' : ''}`}
                onClick={() => setTransitions(!transitions)}
              >
                Transitions (UV Tint) {transitions ? 'ON' : 'OFF'}
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
                Lens Coatings
              </button>
              <button 
                className={`tab-link ${activeTab === 'tech' ? 'active' : ''}`}
                onClick={() => setActiveTab('tech')}
              >
                Specialty Lenses
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === 'coatings' ? (
                <div className="tab-pane animate-fade-in">
                  <h3>Enhance Your Vision Coatings</h3>
                  <p className="tab-intro">Customize your glasses with advanced protective treatments.</p>
                  <div className="coatings-list">
                    <div className="coating-item">
                      <div className="coating-dot blue-dot"></div>
                      <div>
                        <h4>BlueCut™ Screen Protection</h4>
                        <p>Neutralizes high-energy blue light from smartphones and laptops. Prevents eye strain and improves sleep cycle.</p>
                      </div>
                    </div>
                    <div className="coating-item">
                      <div className="coating-dot reflection-dot"></div>
                      <div>
                        <h4>DuraVision® Premium Anti-Reflective</h4>
                        <p>Eliminates 99% of surface reflections. Crucial for night driving safety and pure cosmetic frame transparency.</p>
                      </div>
                    </div>
                    <div className="coating-item">
                      <div className="coating-dot uv-dot"></div>
                      <div>
                        <h4>Photochromic Transitions®</h4>
                        <p>Lenses darken automatically when exposed to sunlight, changing from clear indoor glasses to dark outdoor sunglasses.</p>
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
                      <h4>Key Benefits:</h4>
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
