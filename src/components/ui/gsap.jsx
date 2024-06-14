import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const animateContent = () => {
    gsap.fromTo('.heading', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.5 });
    gsap.fromTo('.description', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1.5 });
  };

 export const NavbarAnimation = () => {
    gsap.set('.navbar', { x: 0 }); // Initialize the navbar position
  
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.navbar', {
      x: '80%',
      duration: 6,
      ease: 'linear'
    }).to('.navbar', {
      x: 0,
      duration: 10,
      ease: 'linear'
    });
  };


  // gsapAnimations.js



gsap.registerPlugin(ScrollTrigger);

export const animateGallery = (galleryRef) => {
  console.log("galleryRef:", galleryRef.current);

  gsap.from('.gallery-item', {
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: galleryRef.current,
      start: 'top 80%',
      markers: true,
      onEnter: () => { // This function will be called when the trigger enters the viewport
        console.log("Animation triggered!");
        gsap.from('.gallery-item', { // Re-animate the gallery items when the trigger enters the viewport
          opacity: 1,
          stagger: 0.2,
          duration: 1.5,
          ease: 'power3.out',
        });
      },
    },
  });
};
