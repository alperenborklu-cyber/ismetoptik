import React from 'react';
import { type Product } from '../data/products';
import luxurySunglasses from '../assets/luxury_sunglasses_hero.png';
import designerOptical from '../assets/designer_optical_glasses.png';

interface ProductCardProps {
  product: Product;
  onBookTryOn: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onBookTryOn }) => {
  // Resolve image asset
  const getProductImage = (imgKey: string) => {
    if (imgKey === 'sunglasses-hero') return luxurySunglasses;
    if (imgKey === 'optical-glasses') return designerOptical;
    // fallback or generated asset placeholder
    return imgKey === 'sunglasses' ? luxurySunglasses : designerOptical;
  };

  const getFallbackClass = () => {
    if (product.image === 'sunglasses-hero' || product.image === 'optical-glasses') {
      return '';
    }
    // Return a stylish stylized CSS card fallback
    return 'fallback-card-style';
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello İsmet Optik, I am interested in checking availability for the "${product.name}" (${product.category}) frame. Could you please provide more information?`
    );
    window.open(`https://wa.me/905423245712?text=${message}`, '_blank');
  };

  return (
    <div className="product-card glass">
      <div className="card-image-container">
        <span className="product-tag">{product.tag}</span>
        
        {product.image === 'sunglasses-hero' || product.image === 'optical-glasses' ? (
          <img 
            src={getProductImage(product.image)} 
            alt={product.name} 
            className="product-image" 
            loading="lazy"
          />
        ) : (
          <div className={`product-image-fallback ${getFallbackClass()}`}>
            <div className="fallback-frame-wire">
              <span>{product.name.split(' ').map(w => w[0]).join('')}</span>
            </div>
            <img 
              src={product.category === 'sunglasses' ? luxurySunglasses : designerOptical} 
              alt={product.name} 
              className="product-image-bg-blur"
            />
          </div>
        )}
      </div>

      <div className="card-details">
        <div className="card-header-info">
          <span className="card-category">{product.category.toUpperCase()}</span>
          <span className="card-price">{product.price}</span>
        </div>
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        
        <div className="product-specs-list">
          {product.specs.slice(0, 2).map((spec, index) => (
            <span key={index} className="spec-badge">{spec}</span>
          ))}
        </div>

        <div className="card-actions">
          <button 
            onClick={() => onBookTryOn(product)} 
            className="btn-secondary btn-sm"
          >
            Reserve Try-On
          </button>
          <button 
            onClick={handleWhatsAppInquiry} 
            className="btn-primary btn-whatsapp btn-sm"
          >
            WhatsApp Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};
