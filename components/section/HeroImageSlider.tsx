"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroSlide {
    image: StaticImageData;
    objectPosition: string;
}

interface HeroImageSliderProps {
    images: HeroSlide[];
    interval?: number;
}

const STRIPS = 8;
const TRANSITION_DURATION = 0.25;
const STRIP_DELAY = 0.04;

export default function HeroImageSlider({
    images,
    interval = 4500,
}: HeroImageSliderProps) {
    const [activeSlide, setActiveSlide] = useState(0);
    const [nextSlide, setNextSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Preload images
    useEffect(() => {
        images.forEach((slide) => {
            const img = new window.Image();
            img.src = slide.image.src;
        });
    }, [images]);

    // Autoplay
    useEffect(() => {
        if (isTransitioning) return;

        const timer = setTimeout(() => {
            setNextSlide((activeSlide + 1) % images.length);
            setIsTransitioning(true);
        }, interval);

        return () => clearTimeout(timer);
    }, [activeSlide, images.length, interval, isTransitioning]);

    // Finish transition
    useEffect(() => {
        if (!isTransitioning) return;

        const totalDuration =
            TRANSITION_DURATION +
            STRIP_DELAY * (STRIPS - 1);

        const timer = setTimeout(() => {
            setActiveSlide(nextSlide);
            setIsTransitioning(false);
        }, totalDuration * 1000 + 50);

        return () => clearTimeout(timer);
    }, [isTransitioning, nextSlide]);

    return (
        <div className="relative h-full w-full overflow-hidden">

            {/* Current image always stays underneath */}
            <Image
                src={images[activeSlide].image}
                alt=""
                fill
                priority
                sizes="(min-width: 2000px) 50vw, 100vw"
                className="object-cover"
                style={{
                    objectPosition: images[activeSlide].objectPosition,
                }}
            />

            {/* Next image enters in strips */}
            {isTransitioning && (
                <>
                    {Array.from({ length: STRIPS }).map((_, index) => {
                        const stripWidth = 100 / STRIPS;
                        const left = index * stripWidth;
                        const right = 100 - left - stripWidth;

                        return (
                            <motion.div
                                key={`${nextSlide}-${index}`}
                                className="absolute inset-0"
                                initial={{
                                    clipPath: `inset(0 ${100 - left}% 0 ${left}%)`,
                                }}
                                animate={{
                                    clipPath: `inset(0 ${right}% 0 ${left}%)`,
                                }}
                                transition={{
                                    duration: TRANSITION_DURATION,
                                    delay: index * STRIP_DELAY,
                                    ease: "linear",
                                }}
                            >
                                <Image
                                    src={images[nextSlide].image}
                                    alt=""
                                    fill
                                    priority
                                    sizes="(min-width: 2000px) 50vw, 100vw"
                                    className="object-cover"
                                    style={{
                                        objectPosition: images[nextSlide].objectPosition,
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </>
            )}
        </div>
    );
}