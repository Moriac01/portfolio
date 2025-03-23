import React from "react";
import { AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";

import { MdOutlineFacebook } from "react-icons/md"


export default function Page() {
    return (
      <div className="pt-25 text-black">
        <div className="px-12 pt-20 grid gap-5 md:grid-cols-2">
          <div className="  grid gap-5">

           <div className=" grid gap-5 ">
           <h1 className="font-serif text-3xl md:text-5xl">Contact us</h1>
            <p>
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

           <div className="flex gap-2 text-3xl">


            <MdOutlineFacebook/>
            <AiOutlineYoutube/>
            <AiOutlineTwitter/>

           </div>
          </div>

          {/* Partie Formulaire */}
         <form action="">

          <div className="grid grid-cols-1">
            <label htmlFor="">Name <span className="text-zinc-400">(Required)</span> </label>
            First Name <input type="text" placeholder="Fist Name" />
          </div>
         </form>
        </div>
      </div>
    );
  }
  