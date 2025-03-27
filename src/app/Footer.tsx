import Link from "next/link"

export default function Footer(){
    return(
        <footer className=" pb-8 pt-8 bg-gray-200   md:pt-10  text-black    sm:px-12 md:px-8 lg:px-12 ">

          <div className=" grid gap-8 md:flex md:justify-between ">
            <div className="grid gap-8">
              <h1 className="text-[20px] font-serif ">Moriac KPANGAM</h1>
              <p className="  text-sm leading-6 tracking-wider">PK0 Avenue Boganda  <br /> 
              <span> Bangui, BG 1060</span> </p>
              <p className="pb-10 ">
                Made with <Link href="#" className="underline underline-offset-4">Squarespace</Link>
              </p>
            </div>
            <div className="grid-cols-2 grid between gap-20  md:mr-20 ">
              <div className=" gap-8 grid ">
                <h1 className="text-2xl font-serif"> 
                  About
                </h1>

                <div className=" grid tracking-wider ">
                  <Link href="/Work" className="capitalize underline underline-offset-4">
                    Work
                  </Link>
                  <Link href="/About" className="capitalize  underline underline-offset-4">
                    who we are
                  </Link>
                  <Link href="/Contact" className="capitalize underline underline-offset-4">
                    contact us
                  </Link>
                </div>
              </div>

              <div className="gap-8 grid">
                <h1 className="text-2xl font-serif">
                  Projects
                </h1>
                
                <div className=" grid  tracking-wider  leading-8">
                  <Link href="/Residential" className="capitalize underline underline-offset-4">
                    residential design
                  </Link>
                  <Link href="/Commercial" className="capitalize  underline underline-offset-4">
                    commercial design
                  </Link>
                  <Link href="/Experiential" className="capitalize underline underline-offset-4">
                    experiential design
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </footer>
    )
}