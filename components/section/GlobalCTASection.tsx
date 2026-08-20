"use client"
import play from '@/public/Images/badge-play-logo.svg'
import wordMark from '@/public/Images/badge-google-play-wordmark.svg'
import apple from '@/public/Images/badge-apple-logo.svg'
import Image from 'next/image'
import Globe from './Globe'
export default function GlobalCTASection() {
    return (
        <div className="relative min-w-0 overflow-hidden bg-[url('/Images/CTAbg.svg')] bg-cover bg-no-repeat min-h-145 lg:min-h-151.25 grid lg:grid-cols-[51.2%_48.8%] items-center">


            <div className='flex min-w-0 flex-col items-center px-5 py-16 text-center sm:px-10 lg:items-start lg:px-[10%] lg:text-start'>

                <div className='w-full max-w-132.25 space-y-5'>
                    <h1 className='font-bold text-[32px] md:text-5xl leading-tight md:leading-[1.15] tracking-[0.02em]'>Trade gold worldwide. Join Goldex.</h1>
                    <p className='text-black/50 md:text-xl leading-normal'>Buy, save, and grow your assets, wherever you are.</p>
                </div>

                <div className='flex flex-wrap items-center justify-center lg:justify-start gap-2.75 mt-8 md:mt-10'>

                    <div className='bg-black border border-[#a6a6a6] relative rounded-lg flex items-center shrink-0 w-42 h-14 hover:opacity-90'>
                        <Image width="29" height="34" className="absolute size-6 top-2 left-2 md:top-2.75 md:left-2.75 md:w-7.25 md:h-8.5" src={play} alt="" />
                        <div className='text-white w-18.5 md:w-26 flex flex-col items-start gap-0.5 absolute top-1.25 md:top-2.5 left-9 md:left-12'>
                            <p className='whitespace-nowrap md:text-[12.6px] leading-[1.05] md:leading-[12.6px]'>GET IT ON</p>
                            <Image width="104" height="21" className='w-auto h-3.5 md:h-5.25' src={wordMark} alt="" />
                        </div>
                    </div>

                    <div className='bg-black border border-[#a6a6a6] relative rounded-lg flex items-start shrink-0 w-42 h-14 hover:opacity-90'>
                        <Image width="28" height="34" className="absolute size-6 top-2 left-2 md:top-2.75 md:left-2.75 md:w-7 md:h-8.5" src={apple} alt="" />
                        <div className='text-white font-medium w-18.5 md:w-26 flex flex-col items-start gap-0.5 absolute top-1.25 md:top-2 left-9 md:left-12'>
                            <p className='whitespace-nowrap md:text-[12.6px] leading-[1.05] md:leading-[12.6px]'>Download on the</p>
                            <p className='whitespace-nowrap md:text-[25.2px] leading-none'>AppStore</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute inset-x-0 bottom-0 h-50 overflow-hidden lg:relative lg:h-full lg:min-h-151.25 '>
                <div className='absolute aspect-square max-w-none max-lg:top-[-12%] max-lg:left-1/2 max-lg:w-full max-lg:max-w-105 max-lg:-translate-x-1/2 lg:pointer-events-auto lg:top-[2%] lg:w-[132%]'>
                    <Globe/>
                </div>
            </div>
        </div>
    )
}