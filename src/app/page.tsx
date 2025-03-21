import Image from "next/image"
import Link from "next/link"

export default function page (){

  return (
    <div className="  mt-50 h-full  text-black  max-h-2xl  px-6 sm:px-6 md:px-8 lg:px-12 ">
      <main className="space-y-4   sm:space-y-6 md:space-y-8    min-h-screen  ">
      <div className=" text-center ">
          <p className=" font-sans">Our Mission</p>
          <h1 className=" text-[35px] text-base  tracking-tight leading-12 md:leading-15 md:max-w-2xl  md:text-5xl  md:ml-100  mt-10 font-serif ">
            Creating spaces that are comfortable, memorable and inspiring.
          </h1>
          
          <Image
            src="/Stocks_1.jpg"
            alt="Stocks_1 image"
            width={1500}
            height={200}
            className=" mt-25"
          />
         
        </div>
        
        <div className="pt-8 flex justify-between ">
            <div className="space-y-4">
            <h1 className="px-6  text-2xl font-serif">
              Residential Design
            </h1>
            <p className="px-6 ">Creative and inviting retail and hospitality environments.</p>
          </div>

          <div className="justify-end pt-5">
          <Link href="/Contact" className="ml-4  bg-black text-white px-10 py-6 rounded-md ">
              See Project
            </Link>
          </div>
          </div>
          <div className="pt-20">
          <Image
              src="/Stocks_2.jpg"
              alt="Stocks image 2"
              width={1500}
              height={200}
            />
            </div>

          <div className="pt-8 flex justify-between ">
            <div className="space-y-4">
            <h1 className="px-6  text-2xl font-serif">
              Commercial Design
            </h1>
            <p className="px-6 ">Creative and inviting retail and hospitality environments.</p>
          </div>

          <div className="justify-end pt-10 ">
          <Link href="/Contact" className="ml-4  bg-black text-white px-10 py-6 rounded-md ">
              See Project
            </Link>
          </div>
          </div>

          <div className="pt-15">
           < Image
           src = "/Bergen.jpeg"
           alt="Bergen image "
           width={1500}
           height={900}
           />

          <div className="pt-8 flex justify-between ">
            <div className="space-y-4">
            <h1 className="px-6  text-2xl font-serif">
              Experiential Design
            </h1>
            <p className="px-6 ">Creative and inviting retail and hospitality environments.</p>
          </div>

          <div className="justify-end pt-10 ">
          <Link href="/Contact" className="ml-4  bg-black text-white px-10 py-6 rounded-md ">
              See Project
            </Link>
          </div>
          </div>
          </div>
          

            
      </main>
      <footer>
        <div>
          <div>
            Bergen
          </div>
          <div>
            ABout
          </div>
        </div>
      </footer>
    </div>
  )
}
