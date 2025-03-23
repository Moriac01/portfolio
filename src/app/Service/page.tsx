import Image from "next/image";
import Footer from "../Footer";

export default function page() {
    return (
      <>
       <div className="px-12 pt-25 md:pt-25 grid gap-8  text-black ">
        <div className="pt-20 md:flex md:grid-cols-1  grid gap-8 justify-between">
          <div>
          <h1>
            ours service
          </h1>
          <p>
          It all begins with an idea. Maybe you want to launch a business.
           Maybe you want to turn a hobby into something more. 
           Or maybe you have a creative project to share with the world. 
           Whatever it is, the way you tell your story online can make 
           all the difference.
          </p>
          </div>
          <div>
            <h3>
              Dream it.
            </h3>
            <p>
            It all begins with an idea. Maybe you want to launch a business.
             Maybe you want to turn a hobby into something more.
              Or maybe you have a creative project to share with the world. 
              Whatever it is, the way you tell your story online can make all 
              the difference.
            </p>
          </div>

          
          
        </div>

        <div className="flex justify-end">
        
          <div className="  md:w-1/2 md:justify-end  ">
            <h3>
              Build it.
            </h3>
            
            <p>
            It all begins with an idea. Maybe you want to launch a business. 
            Maybe you want to turn a hobby into something more. 
            Or maybe you have a creative project to share with the world. 
            Whatever it is, the way you tell your story online can make all 
            the difference.
            </p>
            
            
          </div>
        </div>

        <div className="flex justify-end pb-10">
        
          <div className="  md:w-1/2 md:justify-end  ">
            <h3>
              Grow it.
            </h3>
            
            <p>
            It all begins with an idea. Maybe you want to launch a business. 
            Maybe you want to turn a hobby into something more. 
            Or maybe you have a creative project to share with the world. 
            Whatever it is, the way you tell your story online can make all 
            the difference.
            </p>
            
            
          </div>
        </div>

        <div className=" pt-20 pb-10">
          <Image
          src="/Stocks_2.jpg"
          alt=""
          width={1500}
          height={200}
          className="object-cover md:h-175 "
          />
        </div>
      </div>

        <div>
          <Footer/>
        </div>  

        
     </>
    );
  }
  