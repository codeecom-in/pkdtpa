import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Gallery.css';

function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    {
      id: 1,
      src: '/images/awards/1.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 2,
      src: '/images/awards/2.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 3,
      src: '/images/awards/3.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 4,
      src: '/images/awards/4.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 5,
      src: '/images/awards/5.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 6,
      src: '/images/awards/6.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 7,
      src: '/images/awards/7.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 8,
      src: '/images/awards/8.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 9,
      src: '/images/awards/9.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 10,
      src: '/images/awards/10.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 11,
      src: '/images/awards/11.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 12,
      src: '/images/awards/12.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 13,
      src: '/images/awards/13.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 14,
      src: '/images/awards/14.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 15,
      src: '/images/awards/15.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 16,
      src: '/images/awards/16.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 17,
      src: '/images/awards/17.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 18,
      src: '/images/awards/18.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 19,
      src: '/images/awards/1.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 20,
      src: '/images/awards/20.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 21,
      src: '/images/awards/1.jpg',
      title: 'Award Ceremony 2025',
      category: 'Awards & Recognitions'
    },
    {
      id: 1,
      src: '/images/football/a.jpg',
      title: 'PTPA Football Tournament 2024',
      category: 'Football Match'
    },
    {
      id: 2,
      src: '/images/football/2.jpg',
      title: 'PTPA Football Tournament 2024',
      category: 'Football Match'
    },
  {
    id: 3,
    src: '/images/football/3.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 4,
    src: '/images/football/4.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 5,
    src: '/images/football/5.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 6,
    src: '/images/football/6.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 7,
    src: '/images/football/7.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 8,
    src: '/images/football/8.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 9,
    src: '/images/football/9.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 10,
    src: '/images/football/10.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 11,
    src: '/images/football/11.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 12,
    src: '/images/football/12.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 13,
    src: '/images/football/13.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 14,
    src: '/images/football/14.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 15,
    src: '/images/football/15.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 16,
    src: '/images/football/16.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 17,
    src: '/images/football/17.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 18,
    src: '/images/football/18.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 19,
    src: '/images/football/22.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 20,
    src: '/images/football/20.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  },
  {
    id: 21,
    src: '/images/football/21.jpg',
    title: 'PTPA Football Tournament 2024',
    category: 'Football Match'
  }

  ];

  return (
    <div className="gallery">
      <section className="gallery-header">
        <h1>{t.gallery?.title || 'Photo Gallery'}</h1>
        <p>{t.gallery?.subtitle || 'Precious moments and memories of our community'}</p>
      </section>

      <div className="gallery-container">
        <p className="gallery-intro">
          {t.gallery?.intro || 'Browse through our collection of photos from various PTPA events and gatherings. These images capture the spirit of our community and the bonds we share.'}
        </p>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-image" onClick={() => setSelectedImage(image)} style={{ cursor: 'pointer' }}>
                <img src={image.src} alt={image.title} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>{image.title}</h3>
                    <p>{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="modal-footer">
              <h3>{selectedImage.title}</h3>
              <div className="share-buttons">
                <a
                  href={`https://wa.me/?text=Check%20out%20this%20photo%20from%20PTPA%20events:%20${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn whatsapp-btn"
                  title="Share on WhatsApp"
                >
                  📱 WhatsApp
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn facebook-btn"
                  title="Share on Facebook"
                >
                  👍 Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="gallery-info">
        <div className="info-box">
          <h2>{t.gallery?.share || 'Share Your Memories'}</h2>
          <p>
            {t.gallery?.shareText || "Do you have photos from PTPA events that you'd like to share? We'd love to feature your pictures in our gallery. Please send your high-quality photos to our team. Help us preserve and celebrate our community's precious moments!"}
          </p>
          <div className="contact-info">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:roshan@codeecom.in" className="contact-link">
                roshan@codeecom.in
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{' '}
              <a
                href="https://wa.me/919778256046"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                +91 9778256046
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="gallery-categories">
        <h2>{t.gallery?.categories || 'Gallery Categories'}</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h3>{t.gallery?.eventsGallery || '🎉 Events & Celebrations'}</h3>
            <p>{t.gallery?.eventsGalleryDesc || 'Memorable moments from our annual reunions and festivities'}</p>
          </div>
          <div className="category-card">
            <h3>{t.gallery?.family || '👨‍👩‍👧‍👦 Family Gatherings'}</h3>
            <p>{t.gallery?.familyDesc || 'Family bonding and recreational activities'}</p>
          </div>
          <div className="category-card">
            <h3>{t.gallery?.culturalProgs || '🌍 Cultural Programs'}</h3>
            <p>{t.gallery?.culturalProgsDesc || 'Heritage preservation and cultural awareness activities'}</p>
          </div>
          <div className="category-card">
            <h3>{t.gallery?.youthProgs || '🎓 Youth Programs'}</h3>
            <p>{t.gallery?.youthProgsDesc || 'Leadership development and youth empowerment initiatives'}</p>
          </div>
          <div className="category-card">
            <h3>{t.gallery?.communityServ || '🤝 Community Service'}</h3>
            <p>{t.gallery?.communityServDesc || 'Charity and welfare activities benefiting the community'}</p>
          </div>
          <div className="category-card">
            <h3>{t.gallery?.heritage || '🏠 Pandikkad Heritage'}</h3>
            <p>{t.gallery?.heritageDesc || 'Images celebrating our hometown and heritage'}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
