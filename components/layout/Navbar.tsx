import Image from "next/image";
import logo from "@/public/Images/Heading.svg"
import en from "@/public/Images/en.svg"

export default function Navbar() {
    return (
        <div className="flex items-center justify-between absolute inset-x-0 top-0 z-50 px-18 border py-4">

            <div className="flex items-end gap-8.5 border">
                <div className="inline-flex shrink-0 pb-1 cursor-pointer">
                    <Image width="120" height="31" src={logo} alt="" />
                </div>

                <div className="flex items-center gap-0.5">
                    <button type="button" className="inline-flex items-center justify-center text-black/70 hover:text-black font-medium text-[18px] gap-1.5 h-7.5 px-3 cursor-pointer">
                        Products
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-3.5 opacity-60"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>
                    </button>

                    <p className="inline-flex items-center justify-center text-black/70 hover:text-black font-medium text-[18px] gap-1.5 h-7.5 px-3 cursor-pointer">Contact Us</p>
                </div>
            </div>

            <div className="flex shrink-0 items-center justify-end gap-2.5 border">

                <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 px-4 py-3 font-medium text-sm text-black bg-transparent hover:bg-black/5 cursor-pointer">
                    <span className="size-5">
                        <Image width="20" height="14" className="w-full h-full object-cover rounded-sm" src={en} alt="" />
                    </span>
                    <p>EN</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-3.5 text-black/50 duration-200 opacity-60"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>
                </button>


                <button className="font-medium text-white text-base bg-[#ace65a] hover:bg-[#9fd84f] cursor-pointer rounded-lg px-6 py-2.5 duration-200">Goldex for Business</button>
                <button className="font-medium text-white text-base bg-black hover:opacity-90 cursor-pointer rounded-lg px-6 py-2.5 duration-200">Download App</button>
            </div>
        </div>
    )
}