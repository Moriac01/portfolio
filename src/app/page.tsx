import Image from "next/image"
import Link from "next/link"
import Footer from "./Footer"

export default function page(){
  return(
  <>  
    <div className="md:px-8  py-25 justify-center items-center text-black">  
      <div className=" gap-6 flex flex-col  items-center">
        <p>
          Our Mission
        </p>
        <h1>
          Creating spaces that are comfortable, memorable and inspiring
        </h1>

      </div>

      <div className="px-6 pt-10 ">
      <Image src="/Stocks_1.jpg" alt="Stocks_1 image" 
        width={1500}
        height={180}
        className=" object-cover h-180 md:h-175"/>
      </div>

      <div className="pt-12  grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="justify-between px-6">
          <h1 className="font-serif text-2xl">
            Residential Design
          </h1>
          <p className="font-arial pt-6">
          Apartments, homes and vacation properties.
          </p>
        </div>
        <div className="justify-end px-6 flex">
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

      <div className="pt-12  grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="justify-between px-6">
          <h1 className="font-serif text-2xl">
            Commercial Design
          </h1>
          <p className="font-arial pt-6">
            Creative and inviting retail and hospitality environments.
          </p>
        </div>
        <div className="justify-end px-6 flex">
          <Link href="Commercial" className="rounded-lg bg-black  text-white py-6 px-10">
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

      <div className="pt-12  grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="justify-between px-6">
          <h1 className="font-serif text-2xl">
            Experiential Design
          </h1>
          <p className="font-arial pt-6">
          Temporary and permanent branded spaces.
          </p>
        </div>
        <div className="justify-end px-6  flex">
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