import React from "react";
import Footer from "../Footer";
import Image from "next/image";

export default function page  ()  {
  return (
    <>
    <div className="pt-30  px-12 grid  text-black">
      <div className="pt-25 md:pt-40 mr- grid-cols-2 md:grid md:grid-cols-2  ">
        <div className="leading-relaxed text-3xl tracking-wide md:grid">
          <h1 className="font-serif md:text-5xl capitalize  pb-2">
            who we are
          </h1>
        
        </div>
        <div className="leading-8 tracking-wide pb-8 pt-4">
        <p > 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
          <br /><br />
          <span> 
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque 
            ipsa quae ab illo inventore veritatis et quasi architecto 
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
            quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non 
            numquam eius modi tempora incidunt ut labore et dolore 
            magnam aliquam.
          </span>
        </p>
        </div>
       
      </div>

      <div className=" grid md:justify-end pt-45 pb-20">
        <Image
        src="/about-us.jpg"
        alt=""
        width={1500}
        height={100}
        className="md:h-175 h-120 md:container"
        />
      </div>
    </div>


    <div>
      <Footer/>
    </div>
    </>
  )
};
