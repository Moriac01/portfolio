"use client"; // Assure que ce composant est client-side

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Vérification du changement d'état
  console.log("Menu ouvert :", isOpen);

  return (
    <nav className="flex justify-between items-center py-12 w-[88%] mx-auto  sticky  top-0">
      <Link href="/">
        <h1 className="text-2xl text-black font-semibold"> MK </h1>{" "}
      </Link>

      {/* Menu Desktop */}
      <div className="hidden md:flex  items-center gap-6">
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
        <div className="relative group">
        <button className="hover:underline hover:text-gray-500 text-black" onClick={() => setIsOpen(false)}>
           Projects
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-12 group-hover:left-0 transition-all duration-300">
          <Link href="/Projects/Residential">

          </Link> 
           <Link href="/Projects/Commercial">
           </Link>
           <Link href="/Projects/Commercial">
          </Link>
        </div>

        </div>
        <Link href="/Contact">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-black text-white px-8 py-6 rounded-md"
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
        className={`absolute top-20 justify-center text-4xl pt-45 left-0  gap-6 w-full  bg-white  flex flex-col  items-center 
py-8 transition-all duration-300 
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

        <Link
          href="/Projects"
          className="hover:underline hover:text-gray-500 text-black"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <div className=" mt-auto pt-25">
          <Link href="/Contact">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-black hover:bg-gray-500 text-white text-lg  px-15 py-6 rounded-md"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
