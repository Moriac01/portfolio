import React from "react";
import { AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";
import { MdOutlineFacebook } from "react-icons/md"
import Footer from "../Footer";


export default function Page() {
    return (
      <>
      <div className="pt-25  grid gap-5 md:grid-cols-2 text-black">
        <div className="px-12 container pt-20  md:pt-45 ">
          <div className=" sm:max-w-xl lg:leading-10 lg:tracking-tight lg:max-w-xl xl:max-w-2xl  grid gap-10">

           <div className=" grid gap-10 ">
           <h1 className="font-serif lg:text-5xl  text-3xl md:text-5xl">Contact us</h1>
            <p className=" lg:tracking-wider">
              If you have any questions or comments, please 
              contact us via email or phone, or send us a 
              message using the contact form.
            </p>
           </div>


           <div>
           <h1 className=" font-bold">Email</h1>
            <p>
              email@example.com
            </p>
           </div>

           <div>
           <h1 className=" font-bold">Phone</h1>
            <p>
              (555) 555-5555
            </p>
           </div>

           <div className="flex pt-5  gap-2 text-2xl">

            <Link href="#">
            <MdOutlineFacebook/>
            </Link>
            <Link href="#">
            <AiOutlineYoutube/>
            </Link>
            <Link href="#">
            <AiOutlineTwitter/>
            </Link>

           </div>
          </div>

          
        </div>
        {/* Partie Formulaire */}
        <form action="" className="px-12 pt-12 pb-20 md:pt-45 ">

          
<h1 className=" pb-4">Name <span className="text-zinc-400">(Required)</span> </h1>
<div className=" grid gap-2 grid-cols-2 ">
 
 <div className=" mb-8">
 <label htmlFor="First Name" className="block mb-2">
   First Name <span className="text-red-500">*</span>
 </label>
 <input type="text" 
 placeholder=" Enter your first name" 
 className="bg-gray-300 text-black py-2 px-3 h-12 rounded w-full" 
 required
 />
 </div>

 <div className="mb-8">
 <label htmlFor="Last Name" className=" block mb-2">
   Last Name <span className="text-red-500">*</span>
   </label>
 <input type="text"
  placeholder="Enter your last name"
   className="bg-gray-300 text-black py-2 px-3 h-12 rounded w-full"
   required
   />
 </div>
 
</div>

<div className="mb-8">
 <label htmlFor="Email" className=" block mb-2">
   Email <span className="text-red-500">*  </span>
   </label>
 <input type="text" 
 placeholder="exemple@gmail.com" 
 className="bg-gray-300 text-black py-2 px-3 h-12 rounded w-full" 
 required
 />
 </div>

 <div className="mb-8">
 <label htmlFor="Phone" className=" block mb-2">
   Phone <span className="text-red-500">*</span>
   </label>
 <input type="text" 
 placeholder="(+236) 72-23-56-67" 
 className="bg-gray-300 text-black py-2 px-3 h-12 rounded w-full" 
 required
 />
 </div>




 <div className="mb-8">
 <label htmlFor="Subject" className=" block mb-2">
   Subject <span className="text-red-500">*</span>
   </label>
 <input type="text" 
 placeholder="Enter your subject" 
 className="bg-gray-300 text-black py-2 px-3 h-12 rounded w-full" 
 required
 />
 </div>

 <div className="mb-8">
 <label htmlFor="Message" className=" block mb-2">
   Message <span className="text-red-500">*</span>
   </label>
 <textarea 
 name="Message" 
 id="Message"
  placeholder="Write your message" 
 className="rounded bg-gray-300 text-black resize-none h-25 py-2 px-3 focus:outline-none w-full
  appearance-none focus:shadox-outline-none leading-tight"
  required
 >

 </textarea>
 </div>

 <div className="pb-20">
 <button type="submit"
 className="bg-black rounded text-white py-5 px-8"
 >
   Submit
 </button>
 </div>
</form>
      </div>

      <div>
        <Footer/>
      </div>
      </>
    );
  }
  