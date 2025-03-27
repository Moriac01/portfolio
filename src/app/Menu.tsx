"use client"; // Assure que ce composant est client-side

import {  useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 

  // Vérification du changement d'état
  console.log("Menu ouvert :", isOpen);

  return (
    <nav className=" fixed top-0 font-serif px-12 text-lg dark:text-black py-5 pt-10  left-0 right-0 bg-white transition-all duration-300  flex justify-between items-center z-50 ">
      <Link href="/" onClick={() => setIsOpen(false)} className="dark:text-black font-bold text-2xl"> 
        Moriac<span className="text-cyan-700 font-bold">01</span>
      </Link>

      {/* Menu Desktop */}
      <div className="hidden md:flex  bg-white  items-center gap-8">

        <Link
          href="/Work"
          className="hover:underline hover:text-gray-500 text-black"
        >
          Work
        </Link>
        <Link
          href="/About"
          className="hover:underline hover:text-gray-500 text-black"
        >
          About
        </Link>
        <Link
          href="/Service"
          className="hover:underline hover:text-gray-500 text-black"
        >
          Our Services
        </Link>
        {/* Menu deroulante de Projects */}
        <div className="relative   group">
        <button className="  hover:underline  hover:text-gray-500 text-black gap-2" onClick={() => setIsOpen(false)}>
           Projects
        </button>
        <div className="absolute bg-white  right-[50%]  mt-5 pt-5  w-60  opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-0 group-hover:right-0 transition-all duration-300  gap-4">
          <Link href="/Residential" className="block ml-22 hover:bg-gray-200 text-black">
          Residential Design
          </Link> 

           <Link href="/Commercial" className="block ml-20  hover:bg-gray-200 text-black">
          Commercial Design
           </Link>

           <Link href="/Experiential" className="block ml-20  hover:bg-gray-200 text-black">
           Experiential Design
          </Link>
        </div>

        </div>
        <Link href="/Contact">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-black text-white px-10 py-6 rounded-md"
          >
            Contact Us
          </button>
        </Link>
      </div>

      {/* Bouton Menu Burger */}
      <button
        className="md:hidden text-black "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>

      {/* Menu Mobile */}
      <div
        className={`absolute top-25 justify-center text-5xl pt-35 left-0  gap-6 w-full  bg-white  flex flex-col  items-center 
          Py-6 px-4 transition-all duration-300 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <Link
          href="/Work"
          className="hover:underline hover:text-gray-500 text-black"
          onClick={() => setIsOpen(false)}
        >
          Work
        </Link>
        <Link
          href="About"
          className="hover:underline hover:text-gray-500 text-black"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="/Service"
          className="hover:underline hover:text-gray-500 text-black"
          onClick={() => setIsOpen(false)}
        >
          Our Services
        </Link>

       <Link href="Sous-Menu" 
       className="hover:undeline hover:text-gray-500 text-black"
       onClick={()=> setIsOpen(false)}>
       Projects
       </Link>

        
        <div className=" mt-auto h-screen pt-30 pb-10">
          <Link href="/Contact">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-black hover:bg-gray-500 text-white text-lg  px-10 py-6 rounded-md"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
