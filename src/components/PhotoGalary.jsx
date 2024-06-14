import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const photos = [
  { src: '/images/wedpic9.webp', alt: 'Photo 1' },
  { src: '/images/wedpic2.webp', alt: 'Photo 2' },
  { src: '/images/wedpic10.webp', alt: 'Photo 3' },
  { src: '/images/wedpic4.webp', alt: 'Photo 4' },
  { src: '/images/wedpic5.webp', alt: 'Photo 5' },
  { src: '/images/wedpic6.webp', alt: 'Photo 6' },
  { src: '/images/wedpic7.webp', alt: 'Photo 7' },
  { src: '/images/wedpic11.webp', alt: 'Photo 8' },
];

const PhotoGalleryPage = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      const image = card.querySelector('img');
      const cardBackground = card.querySelector('.gallery-item');
      card.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.5, duration: 0.5 });
        gsap.to(cardBackground, { backgroundColor: '#f8f8f8', duration: 0.5 });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.5 });
        gsap.to(cardBackground, { backgroundColor: '#ffffff', duration: 0.5 });
      });
    });
  }, []);

  return (
    <div style={{ fontFamily: 'Freight big pro' }} className="container mx-auto py-8">
      <h1 className="text-5xl font-bold mb-8 text-center">"Memories in Frames"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            ref={element => (cardRefs.current[index] = element)}
            className="gallery-item rounded-lg overflow-hidden shadow-lg p-9"
            style={{ cursor: 'pointer', transition: 'background-color 0.5s' }}
          >
            <Image src={photo.src} alt={photo.alt} width={300} height={100} className="object-cover" />
            <div className="p-4">
              <p className="text-lg font-semibold">{photo.alt}</p>
              <p className="text-gray-600">Category, Date</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGalleryPage;
