"use client"
import Image from "next/image";
import hero1 from '@/public/Images/hero1.webp'
import hero2 from '@/public/Images/hero2.webp'
import hero3 from '@/public/Images/hero3.png'
import uae from '@/public/Images/uae.gif'
import product from '@/public/Images/product-image.png'
import productPlus from '@/public/Images/product-plus.svg'
import HeroImageSlider from "./HeroImageSlider";
import sell from '@/public/Images/icon-sell.svg'
import buy from '@/public/Images/icon-buy.svg'
import pending from '@/public/Images/icon-pending.svg'
import gold from '@/public/Images/gold-dot.png'
import chartFill from '@/public/Images/chart-fill.svg'
import chartLine from '@/public/Images/chart-line.svg'
import userPlus from '@/public/Images/referral-user-plus.svg'
import seal from '@/public/Images/referral-seal-percent.svg'
import hand from '@/public/Images/referral-hand-arrow.svg'

export default function HeroSection() {

    const heroSlides = [
        {
            image: hero1,
            objectPosition: {
                mobile: "60% center",
                sm: "50% center",
                md: "50% center",
                lg: "center center",
                xl: "45% center",
                "2xl": "center center",
            },

            content: (
                <div className="bg-[#f4f4f4] p-2 rounded-[28px] inline-flex">
                    <div className="bg-white p-3 w-[min(100%,290px)] rounded-[18px] flex flex-col shrink-0 items-stretch self-stretch gap-3">

                        {/* 1st */}
                        <div className="flex items-center justify-between self-stretch gap-1.5">
                            <div className="flex flex-col items-start gap-1.5">
                                <p className="text-[#f08c00] text-[9px] leading-none self-stretch">Sell (Oz)</p>
                                <p className="text-[#111] font-bold text-[15px] leading-none">2032.09</p>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <Image width="8" height="8" className="size-2" src={gold} alt="" />
                                <p className="text-[#090909]/50 font-medium text-[9px] leading-none">Gold</p>
                            </div>

                            <div className="flex flex-col items-end gap-1.5">
                                <p className="text-[#0088ff] text-[9px] leading-none self-stretch">Buy (Oz)</p>
                                <p className="text-[#111] font-bold text-[15px] leading-none">2032.09</p>
                            </div>
                        </div>

                        <div className="h-px w-full bg-[#bac7d5]/20 my-2" />
                        {/* 2nd */}
                        <div className="relative w-full h-39.5 shrink-0">
                            <div className="absolute inset-0 h-px bg-[#111]/10 top-2"></div>
                            <div className="absolute inset-0 h-px bg-[#111]/10 top-10"></div>
                            <div className="absolute inset-0 h-px bg-[#111]/10 top-18"></div>
                            <div className="absolute inset-0 h-px bg-[#111]/10 top-26"></div>
                            <div className="absolute inset-0 h-px bg-[#111]/10 top-34"></div>
                            <div className="absolute h-2 w-px bg-[#111]/10 top-34.25 left-3.25"></div>
                            <div className="absolute h-2 w-px bg-[#111]/10 top-34.25 left-21.25"></div>
                            <div className="absolute h-2 w-px bg-[#111]/10 top-34.25 left-39.5"></div>
                            <div className="absolute h-2 w-px bg-[#111]/10 top-34.25 left-57.75"></div>

                            <div className="absolute inset-x-0 top-0 h-34">
                                <Image className="absolute inset-0 w-full h-full object-fill" src={chartFill} alt="" />
                                <Image className="absolute top-0 w-full h-27.5 object-fill" src={chartLine} alt="" />
                            </div>

                            <div className="flex justify-between absolute inset-x-0 bottom-0 px-0.5 font-semibold text-[7px] text-[#111]/30 leading-none">
                                <p className="text-center ">7 AM</p>
                                <p className="text-center ">8 AM</p>
                                <p className="text-center ">9 AM</p>
                                <p className="text-center ">10 AM</p>
                            </div>
                        </div>

                        {/* 3rd */}
                        <div className="flex items-start justify-between self-stretch gap-2">
                            <p className="text-[9px] text-[#111]/50 leading-none">Low $ 2023.02</p>
                            <p className="text-[9px] text-[#111]/50 leading-none">High: $ 2023.02</p>
                        </div>

                        <div className="h-px w-full bg-[#bac7d5]/20 my-2" />

                        {/* 4th */}
                        <div className="flex items-stretch self-stretch gap-1.5">
                            <div className="flex flex-1 items-center justify-center gap-1 px-3 rounded-[9px] bg-[#f08c00] h-8.5">
                                <Image width="19" height="19" className="size-4.75" src={sell} alt="" />
                                <p className="font-semibold text-[11px] text-white leading-none">Sell</p>
                            </div>

                            <div className="flex flex-1 items-center justify-center gap-1 px-3 rounded-[9px] bg-[#f6f7f8] h-8.5">
                                <Image width="19" height="19" className="size-4.75" src={pending} alt="" />
                                <p className="font-semibold text-[11px] text-[#090909] leading-none ">Pending</p>
                            </div>

                            <div className="flex flex-1 items-center justify-center gap-1 px-3 rounded-[9px] bg-[#45abff] h-8.5">
                                <Image width="19" height="19" className="size-4.75" src={buy} alt="" />
                                <p className="font-semibold text-[11px] text-white leading-none">Buy</p>
                            </div>
                        </div>

                    </div>
                </div>
            ),

            contentArea: {
                left: 10,
                right: 55,
                top: -5,
                bottom: 90,
            },
        },

        {
            image: hero2,
            objectPosition: {
                mobile: "75% center",
                md: "70% center",
                lg: "75% center",
                xl: "80% center",
                "2xl": "70% center",
            },

            content: (
                <div className="bg-[#f4f4f4] p-2 rounded-[28px] inline-flex">
                    <div className="bg-white p-3 w-90 rounded-3xl flex flex-col shrink-0 items-stretch self-stretch gap-3">

                        <Image className="w-full h-42 object-cover rounded-[14px]" src={product} alt="" />

                        <div className="w-full flex flex-col items-stretch px-1.5 pb-1.5">

                            <div className="flex items-start justify-between self-stretch gap3.5">

                                <div className="flex flex-1 flex-col items-start gap-1.5">
                                    <h5 className="font-medium text-[#080808] text-[14px] leading-sung self-stretch">One bhori 24 Carat Fine Gold Jewelry</h5>
                                    <p className="text-[#080808]/50 text-[14px] leading-[1.4] self-stretch">11.6 grams</p>
                                </div>

                                <div className="flex items-center justify-center shrink-0 rounded-full bg-[#f6f7f8] size-11.5">
                                    <Image width="18" height="18" src={productPlus} alt="" />
                                </div>
                            </div>

                            <div className="h-px w-full bg-[#bac7d5]/20 my-2" />
                            <p>230,530.00 AED</p>
                        </div>
                    </div>
                </div>
            ),

            contentArea: {
                left: 10,
                right: 55,
                top: -5,
                bottom: 90,
            },
        },

        {
            image: hero3,
            objectPosition: {
                mobile: "65% center",
                lg: "70% center",
                xl: "75% center",
            },

            content: (
                <div className="bg-[#f4f4f4] p-2 rounded-[28px] inline-flex">
                    <div className="bg-white p-3 w-80 rounded-[18px] flex flex-col shrink-0 items-stretch self-stretch gap-3">

                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center shrink-0 size-15.5 overflow-hidden">
                                <p className="absolute size-13.25 rounded-full bg-[#bac7d5]/25"></p>
                                <Image width="24" height="24" className="size-6 relative z-10" src={userPlus} alt="" />
                            </div>

                            <div className="flex flex-col items-start justify-center gap-1">
                                <p className="font-semibold text-[20px] text-[#090909] leading-normal self-stretch">35</p>
                                <p className="text-base text-[#090909]/50 leading-normal self-stretch">Total Referrals</p>
                            </div>
                        </div>

                        <div className="h-px w-full bg-[#bac7d5]/20 my-1" />

                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center shrink-0 size-15.5 overflow-hidden">
                                <p className="absolute size-13.25 rounded-full bg-[#7e5aef]/15"></p>
                                <Image width="24" height="24" className="size-6 relative z-10" src={seal} alt="" />
                            </div>

                            <div className="flex flex-col items-start justify-center gap-1">
                                <p className="font-semibold text-[20px] text-[#090909] leading-normal self-stretch">2,450.00 USD</p>
                                <p className="text-base text-[#090909]/50 leading-normal self-stretch">Total Commission</p>
                            </div>
                        </div>

                        <div className="h-px w-full bg-[#bac7d5]/20 my-1" />

                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center shrink-0 size-15.5 overflow-hidden">
                                <p className="absolute size-13.25 rounded-full bg-[#f88989]/20"></p>
                                <Image width="24" height="24" className="size-6 relative z-10" src={hand} alt="" />
                            </div>

                            <div className="flex flex-col items-start justify-center gap-1">
                                <p className="font-semibold text-[20px] text-[#090909] leading-normal self-stretch">35</p>
                                <p className="text-base text-[#090909]/50 leading-normal self-stretch">Total Withdraw</p>
                            </div>
                        </div>

                    </div>
                </div>
            ),

            contentArea: {
                left: 10,
                right: 55,
                top: -5,
                bottom: 90,
            },
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-dvh 2xl:min-h-256 pt-20 lg:p-2 pb-20">

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


            <div className="order-2 relative w-full overflow-hidden h-100 sm:h-150 lg:h-auto">
                <HeroImageSlider images={heroSlides} />
            </div>

        </div>
    )
}