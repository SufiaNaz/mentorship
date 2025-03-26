import React from 'react';

const ImageGallery = () => {
  const images = [
    { src: '/images/mentors1.jpeg', text: 'Image 1' },
    { src: '/images/mentors3.jpeg', text: 'Image 2' },
    { src: '/images/mentors4.jpeg', text: 'Image 3' },
    { src: '/images/mentors5.jpeg', text: 'Image 4' },
    { src: '/images/mentors2.jpeg', text: 'Image 5' },
    { src: '/images/mentor8.jpeg', text: 'Image 6' },
    { src: '/images/mentor8.jpeg', text: 'Image 7' },
    { src: '/images/mentor8.jpeg', text: 'Image 8' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: 'relative',
            width: '100%',
            height: '200px',
            borderRadius: '8px',
            backgroundColor: 'violet', // Ensure background color is applied
            overflow: 'hidden', // Ensure content doesn't exceed bounds
          }}
        >
          {/* Image with a covering layer */}
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Text overlay */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            }}
          >
            {image.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
