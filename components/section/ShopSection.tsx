"use client"
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import shop from '@/public/Images/shop.avif'

export default function ShopSection() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    })

    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
    )

    return (
        <div className="flex items-center justify-center relative w-full min-w-0 min-h-112 sm:min-h-128 md:min-h-215 px-5 py-16 md:py-24 overflow-x-clip overflow-y-hidden">
            <motion.div ref={ref} style={{ clipPath }}
            className="absolute inset-0 overflow-hidden">
                <Image sizes="100vw" src={shop} alt="Revealed image" 
                className="absolute inset-0 h-full w-full object-cover object-[26%_center] md:object-[32%_center]"/>
            </motion.div>

            <p className="relative text-center max-w-[min(100%,40rem)] md:max-w-4xl font-bold text-white md:text-[64px] text-[clamp(1.75rem,7.2vw,4rem)] tracking-[-0.06em] leading-[1.12] md:leading-[1.05]">It's not just digital. <br /> Walk into a real shop, anytime.</p>
        </div>
    )
}