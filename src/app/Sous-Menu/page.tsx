
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function page() {
  return (
    <div 

className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 

        className="text-3xl font-bold text-black"
      >
        Projects
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ 

opacity: 1 }} 
        transition={{ delay: 0.2, duration: 0.5 }} 
        className="mt-2 text-gray-600 "
      >
        Explore our different project categories.
      </motion.p>


      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.4, duration: 0.5 }} 
        className="mt-6 space-y-4 w-full max-w-md"
      >
        <Link href="/Residential">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="block p-4 border rounded-md hover:bg-gray-100 text-black cursor-pointer">
            🏡 Residential Design
          </motion.div>
        </Link>
        <Link href="/Commercial">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
          className="block p-4 border text-black rounded-md hover:bg-gray-100 cursor-pointer">
            🏢 Commercial Design
          </motion.div>
        </Link>
        <Link href="/Experiential">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
          className="block p-4 border text-black rounded-md hover:bg-gray-100 cursor-pointer">
            🎭 Experiential Design
          </motion.div>
        </Link>

      </motion.div>
    </div>
  );
}
