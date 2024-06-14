// components/Header.js
"use client"

import { NavbarAnimation } from './ui/gsap';
import Link from 'next/link';
import { useState,  useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    NavbarAnimation();
  }, []);

  return (
 
    
    <nav style={{ backgroundColor: '	#FA8072',fontFamily:"Freight big pro", color:'black' }} className=" p-5 w-full fixed top-0">
      <div className=" container mx-auto flex justify-between items-center text-3xl ">
        <div className="flex items-center">
          <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 20" width="300" height="20">                    <title>FlavourFusion</title>

                   <text x="10" y="20" fontFamily="Freight big pro" fontSize="30" fill='black'>EverAfterBliss</text>
                                    </svg>
          </Link>
        </div>
        <div className=" navbar hidden md:flex items-center space-x-10">
          <Link href="/about">
            Venues
          </Link>
          <Link href="/services">
           Photos
          </Link>
          <Link href="/contact">
          Vendors
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden  grid gap-4 grid-rows-3">
            <Link href="/about">
             Venues
            </Link>
            <Link href="/services">
             Photos
            </Link>
            <Link href="/contact">
             Vendors          </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;


// import Link from 'next/link';

// const Header = () => {
//   return (
//     <nav className="bg-gray-800 w-full fixed top-0 p-4 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <Link href="/">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 20" width="300" height="20">
// //                     <title>FlavourFusion</title>

// //                     <text x="10" y="20" fontFamily="Freight big pro" fontSize="20" fill='#DFFF00'>Flavour</text>
// //                     <text x="75" y="20" fontFamily="Freight big pro" fontSize="20" fill="white">Fusion</text>
// //                 </svg>
//           </Link>
//         </div>
//         <div className="hidden md:flex items-center space-x-10">
//           <Link href="/about">
//             About
//           </Link>
//           <Link href="/services">
//             Services
//           </Link>
//           <Link href="/contact">
//             Contact
//           </Link>
//         </div>
//         <div className="md:hidden">
//           <button className="text-white">
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
