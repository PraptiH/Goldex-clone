import Image from "next/image";
import hero1 from '@/public/Images/hero1.webp'
import uae from '@/public/Images/uae.gif'

export default function HeroSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-dvh 2xl:min-h-256 pt-20 lg:p-2">

            <div className="order-1 lg:order-0 flex flex-col justify-center lg:justify-start px-5 sm:px-10 lg:px-[10.4%] pb-10 2xl:pb-20 pt-8 sm:pt-12 lg:pt-44 xl:pt-48 2xl:pt-52">

                <div className="flex flex-col items-start gap-4 sm:gap-5 w-full max-w-150 shrink-0">
                    <h1 className="font-extrabold text-[36px] sm:text-5xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-normal sm:leading-[1.12] w-full self-stretch">Your gold, always within reach.</h1>
                    <p className="text-base sm:text-lg lg:text-xl text-black/50 leading-relaxed sm:leading-normal w-full self-stretch">Trade, store, and receive real gold and silver, all from <br className="hidden sm:block" />
                        one app, all backed by shops you can actually visit.</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:flex-nowrap items-stretch sm:items-center gap-2.5 w-full max-w-90.75 mt-6 sm:mt-7">
                    <button className="btn btnAnim inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#f8cf38] px-6 py-2.5 font-medium text-base whitespace-nowrap min-h-11 w-full sm:w-auto leading-normal cursor-pointer">Get the Super App</button>
                    <button className="bg-[#f3f3f3] hover:bg-[#e8e8e8] duration-200 inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-2.5 font-medium text-base whitespace-nowrap min-h-11 w-full sm:w-auto leading-normal cursor-pointer">Contact Us</button>
                </div>

                <div className="flex flex-nowrap items-start gap-m sm:gap-10 max-w-127.5 mt-10 sm:mt-16 lg:mt-36 xl:mt-40 2xl:mt-64">

                    <div className="flex flex-1 flex-col gap-1 sm:gap-1.5">
                        <h3 className="font-bold text-[24px] sm:text-[38px] leading-none tracking-[-0.06em]">200+</h3>
                        <p className="text-black/50 leading-snug sm:leading-normal text-[11px] sm:text-base">partner jewelry shops</p>
                    </div>

                    <div className="flex flex-1 flex-col gap-1 sm:gap-1.5">
                        <h3 className="font-bold text-[24px] sm:text-[38px] leading-none tracking-[-0.06em]">100%</h3>
                        <p className="text-black/50 leading-snug sm:leading-normal text-[11px] sm:text-base">insured & traceable</p>
                    </div>

                    <div className="flex shrink-0 flex-col gap-1 sm:gap-1.5 w-auto">
                        <Image width="76" height="38" className="w-auto sm:w-19 object-cover h-7 sm:h-9.5" src={uae} alt="" />
                        <p className="text-black/50 leading-snug sm:leading-normal text-[11px] sm:text-base">Based in UAE</p>
                    </div>
                </div>
            </div>

            
                <div className="order-2 relative h-svh lg:h-full w-full">
                    <Image fill className="object-cover" src={hero1} alt="" />
                </div>
           
        </div>
    )
}