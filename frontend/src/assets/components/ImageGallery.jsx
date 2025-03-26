import React from 'react';

const ImageGallery = () => {
  const images = [
    { src: '/images/mentors1.jpeg', text: 'Aditya Sharma' },
    { src: '/images/mentors3.jpeg', text: 'Mark Williams' },
    { src: '/images/m1.jpeg', text: 'David' },
    { src: '/images/mentors5.jpeg', text: 'Stephen' },
    { src: '/images/m2.jpeg', text: 'Sebastian' },
    { src: '/images/mentor8.jpeg', text: 'Isabella' },
    { src: '/images/m3.jpeg', text: 'Shelly' },
    { src: '/images/m5.jpeg', text: 'Ankita Phogat' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-52 rounded-lg overflow-hidden shadow-lg">
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image.src})` }}
          />

          {/* Text Overlay at the Bottom */}
          <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2">
            {image.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
