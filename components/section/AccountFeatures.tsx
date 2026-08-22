"use client";
import feature1 from '@/public/Images/feature-invest.avif'
import feature2 from '@/public/Images/feature-share.avif'
import feature3 from '@/public/Images/feature-store.avif'
import feature4 from '@/public/Images/Supportapp.avif'
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

type Feature = {
    title: string
    description: string
    image: StaticImageData
}

const features: Feature[] = [
    {
        title: "Manage MT5 accounts",
        description: "Run your MT5 account through a real, registered jewelry business.",
        image: feature1,
    },
    {
        title: "Secure transactions, with ease",
        description: "Add funds, send money to anyone on Goldex, or withdraw straight to your bank, all from one wallet.",
        image: feature2,
    },
    {
        title: "Share and earn. Forever.",
        description: "Refer friends and earn commission every time they transact on Goldex, across all services. Their referrals earn you royalties too.",
        image: feature3,
    },
    {
        title: "24/7 Customer support",
        description: "Whether it's a personal account question or a business inquiry, our dedicated in-app chat is always there.",
        image: feature4,
    },
];

export default function AccountFeatures() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const handleChange = () => {
            setIsLargeScreen(mediaQuery.matches);
        };

        handleChange();
        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        isLargeScreen ? ["0%", "-40%"] : ["0%", "0%"]
    );

    return (
        <div ref={sectionRef} className={`relative 
            ${isLargeScreen ? "h-[calc(100dvh+870px)]" : "h-auto"}`}>
            <div className={`${isLargeScreen ? "sticky top-0 h-dvh overflow-hidden" : ""}`}>
                <motion.div style={isLargeScreen ? { x } : undefined}
                    className="w-full flex flex-col gap-16 px-5 lg:flex-row lg:w-max lg:px-30">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col gap-6 shrink-0 md:w-119.5"
                        >
                            <div className="relative w-full aspect-478/380 md:aspect-auto md:h-85 overflow-hidden">
                                <Image sizes='(min-width:768px) 478px,100vw' fill
                                    src={feature.image} alt={feature.title} className="object-cover" />
                            </div>

                            <div className='space-y-2 px-2'>
                                <h3 className="font-semibold text-2xl tracking-[.03em]"> {feature.title} </h3>

                                <p className="font-medium text-xl text-black/50 leading-normal">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}