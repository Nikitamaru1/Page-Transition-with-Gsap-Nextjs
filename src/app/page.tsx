'use client';
import HeroSection from '../components/HeroSection';
import PhotoGalary from '../components/PhotoGalary';
import Venues from '../components/Venues';



export default function Home() {

  return (
      <main className="main">
          <HeroSection />
          <PhotoGalary />
          <Venues />
          
      </main>
  )
}