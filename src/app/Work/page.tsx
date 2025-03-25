"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "../Footer"

export default function page(){
  return(
  <>  
    <div className="md:px-8 min-h-screen  pt-25 justify-center items-center text-black">  
      <div className=" text-center px-6 gap-10 flex flex-col pt-25 justify-center items-center">
        <p className="md:pt-8">
          Our Mission
        </p>
        <h1 className="font-serif  text-[30px] md:text-[48px] md:leading-15 md:text-balance  md:tracking-wide   md:text-base text-base tracking-wider leading-12  pb-8">
          Creating spaces that are  comfortable, memorable and  inspiring
        </h1>

      </div>

      <div className="px-6 pt-20 ">
      <Image src="/Stocks_1.jpg" alt="Stocks_1 image" 
        width={1500}
        height={180}
        className=" object-cover h-180 md:h-175"/>
      </div>

      <div className="pt-12  pb-12  grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="justify-between px-12 md:px-6">
          <h1 className="font-serif md:text-4xl text-2xl">
            Residential Design
          </h1>
          <p className="font-arial pt-10">
          Apartments, homes and vacation properties.
          </p>
        </div>
        <div className="justify-end pt-8 px-6 mr-6 md:mr-0  flex">
          <Link href="/Residential" className="rounded-lg bg-black  text-white py-6 px-10">
            See Project
          </Link>
        </div>
      </div>

      <div className="px-6 pt-10">
      <Image src="/Stocks_2.jpg" alt="Stocks_2 image 2" 
        width={1500}
        height={180}
        className=" object-cover h-180 md:h-175"/>
      </div>

      <div className="pt-12  pb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="justify-between px-12 md:px-6">
          <h1 className="font-serif  md:text-4xl text-2xl">
            Commercial Design
          </h1>
          <p className="font-arial pt-10">
            Creative and inviting retail and hospitality environments.
          </p>
        </div>
        <div className="justify-end  px-6 pt-6 mr-6 md:mr-0  flex">
          <Link href="/Commercial" className="rounded-lg bg-black  text-white py-6 px-10">
            See Project
          </Link>
        </div>
      </div>

      <div className="px-6 pt-10">
      <Image src="/Bergen.jpeg" alt="Stocks_1 image" 
        width={1500}
        height={175}
        className=" object-cover h-150  md:h-180"/>
      </div>

      <div className="pt-12 pb-12  grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="justify-between px-12 md:px-6">
          <h1 className="font-serif md:text-4xl text-2xl">
            Experiential Design
          </h1>
          <p className="font-arial pt-10">
          Temporary and permanent branded spaces.
          </p>
        </div>
        <div className="justify-end  pb-12 px-6 pt-8 mr-6 md:mr-0  flex">
          <Link href="/Experiential" className="rounded-lg bg-black  text-white py-6 px-10" 
          
          >
            See Project
          </Link>
        </div>
      </div>
    </div>
    <div>
     < Footer/>
    </div> 
  </>
  )
}