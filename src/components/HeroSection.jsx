'use client';
import { useEffect } from 'react';
import { animateContent } from './ui/gsap';
import { motion } from 'framer-motion';
// pages/index.js

import Head from 'next/head';

export default function Home() {

  useEffect(() => {
    animateContent();
  }, []);

  return (
    <div style={{ fontFamily: "Freight big pro" }}>
      <Head>
        <title>Wedding Page</title>
        <link rel="stylesheet" href="styles.css" />
      </Head>


      <div style={{
        backgroundImage: "url('/images/img2.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      
        
      }}>
        <section className="h-screen flex justify-center items-center ">

          <div style={{marginTop:"30%"}} className="container mx-auto text-center py-16 ">
          <motion.h1 
      className="heading text-6xl lg:text-8xl text-white py-2 font-semibold tracking-wide leading-tight z-2 "
      whileHover={{ scale: 1.1, color: 'white',opacity: 0.9 }}
      transition={{ duration: 0.3 }}
    >
              "Love's Journey: Our Wedding Tale"
            </motion.h1>
            <p className=" description text-xl lg:text-5xl  text-black mt-4 ">
              Together, let's celebrate love, unity, and <br />
              the promise of a beautiful future ahead.  <br />

            </p>
          </div>
        </section>
      </div>    
    </div>
  )
}
