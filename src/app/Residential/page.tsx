"use client"

import React from "react";
import Image from "next/image";
import Footer from "../Footer";

export default function page () {
  return (
    <>
      <div className="pt-45  text-black">
        <div className="grid gap-5  px-12  md:grid-cols-2">
          <div>
            <h1>
              Residential Design
            </h1>
          </div>
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse sit amet ex vel lectus aliquet porttitor. 
            Proin sollicitudin vitae purus at cursus. 
            Nullam suscipit ultricies lectus in efficitur. 
            Phasellus hendrerit enim lectus. 
            Nunc vitae eleifend metus. 
            <span className="">
            Vestibulum ante ipsum primis in faucibus orci luctus et
             ultrices posuere cubilia Curae; Vivamus eu vehicula felis, 
             vel congue purus. Integer ut elit feugiat sem semper mollis. 
             Etiam malesuada eros turpis, id dignissim justo dictum et. 
             Ut a nisl sed mauris luctus dapibus sed ut lacus. 
             Phasellus sit amet neque tortor. Donec sit amet risus viverra, 
             vulputate arcu et, pellentesque risus.
            </span>
            </p>
          </div>
        </div>

        <div className="px-12 grid gap-2 grid-cols-2">
          
          
        <div>
            <Image
            src="/Stocks_1.jpg"
            alt=""
            width={500}
            height={200}
            className="h-75"
            />
          </div>

          <div>
            <Image
            src="/Stocks_1.jpg"
            alt=""
            width={500}
            height={200}
            className="h-75"
            />
          </div>

          <div>
            <Image
            src="/Stocks_1.jpg"
            alt=""
            width={500}
            height={200}
            className="h-75"
            />
          </div>

          <div>
            <Image
            src="/Stocks_1.jpg"
            alt=""
            width={500}
            height={200}
            className="h-75"
            />
          </div>
        </div>

        <div className="pt-10 px-12 grid gap-4">
          <div>
            <h4>
              Credits
            </h4>
          </div>
          <div>
            <p>
              Firsname Lastname
            </p>
            <p>
              Title/Role
            </p>
          </div>

          <div>
            <p>
             Firstname Lastname 
            </p>
            <p>
              Title/Role
            </p>
          </div>

          <div>
            <p>
             Firstname Lastname 
            </p>
            <p>
              Title/Role
            </p>
          </div>

          <div>
            <p>
             Firstname Lastname 
            </p>
            <p>
              Title/Role
            </p>
          </div>

          
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </>
    
)
};
