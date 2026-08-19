import Image from "next/image";
import flag1 from "@/public/Images/image 12.png"
import flag2 from "@/public/Images/image 9.png"
import flag3 from "@/public/Images/image 10.png"
import flag4 from "@/public/Images/image 11.png"
import flag5 from "@/public/Images/image 6.png"
import flag6 from "@/public/Images/image 8.png"
import FooterEffect from "./FooterEffect";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black text-white md:min-h-210.25">
      <div className="flex w-full flex-1 flex-col px-5 pt-16 pb-8 sm:px-10 md:pt-21.5 md:pb-10 lg:px-[5.3248%]">
        <div className="grid gap-14 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:justify-between md:gap-10 xl:gap-16">
          <div>
            <FooterEffect />
            <p className="mt-6.5 max-w-100.75 text-base leading-normal text-white/50">
              Trade, store, and receive real gold and silver, all from one
              app, all backed by shops you can actually visit.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:w-70 lg:gap-0 xl:w-90">
            <div>
              <h3 className="mb-4 font-medium text-white/50">Quick link</h3>
              <ul className="space-y-3 text-white">
                <p className="hover:text-white/50 cursor-pointer underline">Contact us</p>
                <p className="hover:text-white/50 cursor-pointer underline">Customer support</p>
                <p className="hover:text-white/50 cursor-pointer underline">Privacy policy</p>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-medium text-white/50">Taghyeer</h3>
              <ul className="space-y-3 text-white">
                <p className="hover:text-white/50 cursor-pointer underline">About</p>
                <p className="hover:text-white/50 cursor-pointer underline">Contact us</p>
                <p className="hover:text-white/50 cursor-pointer underline">Career</p>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="mt-14 flex flex-col items-center gap-6 md:mt-auto md:flex-row md:items-end md:justify-between md:gap-10">
          <div>
            <p className="font-medium text-white/50 text-center md:text-left">Our locations</p>
            <div className="grid grid-cols-3 md:grid-cols-6 justify-items-center gap-x-2 gap-y-3 md:gap-2.5 lg:gap-0.5 my-2">
              <Image width="119" height="59" className="w-auto h-8 md:h-12 lg:h-13 xl:h-14.75 cursor-pointer" src={flag1} alt="" />
              <Image width="99" height="59" className="w-auto h-8 md:h-12 lg:h-13 xl:h-14.75 cursor-pointer" src={flag2} alt="" />
              <Image width="89" height="59" className="w-auto h-8 md:h-12 lg:h-13 xl:h-14.75 cursor-pointer" src={flag3} alt="" />
              <Image width="89" height="59" className="w-auto h-8 md:h-12 lg:h-13 xl:h-14.75 cursor-pointer" src={flag4} alt="" />
              <Image width="119" height="59" className="w-auto h-8 md:h-12 lg:h-13 xl:h-14.75 cursor-pointer" src={flag5} alt="" />
              <Image width="89" height="59" className="w-auto h-8 md:h-12 lg:h-13 xl:h-14.75 cursor-pointer" src={flag6} alt="" />
            </div>
          </div>
          <Link href="#top" className="flex shrink-0 items-center gap-2 font-medium text-sm text-white/50 hover:text-white">
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-4"><path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"></path></svg>
          </Link>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 md:pt-16 md:pb-2">
          <p className="text-center text-white/20">
            © All rights reserved Taghyeer Information Technologies.
          </p>
        </div>
      </div>


    </footer>
  );
}
