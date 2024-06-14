import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const places = [
  { name: 'Delhi', image: '/images/delhi.webp' },
  { name: 'Mumbai', image: '/images/bombay.webp' },
  { name: 'Hyderabad', image: '/images/hyderabad.webp' },
  { name: 'Lucknow', image: '/images/lucknow.webp' },
  { name: 'Bangalore', image: '/images/banglore.webp' },
  { name: 'Jiapur', image: '/images/jaipur.webp' },
  { name: 'Chennai', image: '/images/chennai.webp' },
  { name: 'Kolkata', image: '/images/kolkata.webp' },


];

const WeddingVenues = () => {
  const venueRefs = useRef([]);

  useEffect(() => {
    venueRefs.current.forEach((venue, index) => {
      const image = venue.querySelector('img');
      const venueTitle = venue.querySelector('.venue-title');
      venue.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.1, duration: 0.5 });
        gsap.to(venueTitle, { duration: 0.5 });
      });
      venue.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.5 });
        gsap.to(venueTitle, {  duration: 0.5 });
      });
    });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl font-bold mb-8 text-center">Wedding Venues</h1>
      {/* List of places */}
      <div className="flex justify-center mb-8 rounded-full">
        {places.map((place, index) => (
          <div key={index} ref={element => (venueRefs.current[index] = element)} className="venue-item mx-4">
            <Image src={place.image} alt={place.name} width={100} height={50} className="rounded-full aspect-square object-cover" />
            <p className="venue-title opacity-1 absolute text-center justify-center text-black rounded-md ml-4">
                {place.name}
              </p>
          </div>
        ))}
      </div>
      {/* Images of wedding venues */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {places.map((place, index) => (
          <div key={index} className="venue-image rounded-lg overflow-hidden shadow-lg">
            <Image src={place.image} alt={place.name} width={300} height={200} className="object-cover" />
            <div className="p-4 bg-white">
              <p className="text-lg text-black font-semibold">{place.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingVenues;
