"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

interface HeroSlide {
    image: StaticImageData;
    objectPosition: {
        mobile: string;
        sm?: string;
        md?: string;
        lg: string;
        xl?: string;
        "2xl"?: string;
    };
    content: React.ReactNode;
    contentArea: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
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
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [contentPosition, setContentPosition] = useState({ x: 0, y: 0 });

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        updateWidth();

        window.addEventListener("resize", updateWidth);

        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    const getObjectPosition = (slide: HeroSlide) => {
        const position = slide.objectPosition;

        if (screenWidth >= 1536 && position["2xl"]) {
            return position["2xl"];
        }

        if (screenWidth >= 1280 && position.xl) {
            return position.xl;
        }

        if (screenWidth >= 1024 && position.lg) {
            return position.lg;
        }

        if (screenWidth >= 768 && position.md) {
            return position.md;
        }

        if (screenWidth >= 640 && position.sm) {
            return position.sm;
        }

        return position.mobile;
    };

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const mouseX =
            (event.clientX - rect.left) / rect.width;

        const mouseY =
            (event.clientY - rect.top) / rect.height;

        const area = images[activeSlide].contentArea;

        const x =
            area.left +
            mouseX * (area.right - area.left);

        const y =
            area.top +
            mouseY * (area.bottom - area.top);

        setContentPosition({
            x,
            y,
        });
    };

    // Preload images
    useEffect(() => {
        images.forEach((slide) => {
            const img = new window.Image();
            img.src = slide.image.src;
        });
    }, [images]);


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

    useEffect(() => {
        if (isTransitioning || isHovered) return;

        const timer = setTimeout(() => {
            setNextSlide((activeSlide + 1) % images.length);
            setIsTransitioning(true);
        }, interval);

        return () => clearTimeout(timer);
    }, [
        activeSlide,
        images.length,
        interval,
        isTransitioning,
        isHovered,
    ]);

    return (
        <div className="relative h-full w-full overflow-hidden"
            onMouseEnter={(event) => {
                setIsHovered(true);

                const rect = event.currentTarget.getBoundingClientRect();

                mouseX.set(event.clientX - rect.left + 24);
                mouseY.set(event.clientY - rect.top + 24);
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
        >

            {/* Current image always stays underneath */}
            <Image
                src={images[activeSlide].image}
                alt=""
                fill
                priority
                sizes="(min-width: 2000px) 50vw, 100vw"
                className="object-cover"
                style={{
                    objectPosition: getObjectPosition(images[activeSlide]),
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
                                        objectPosition: getObjectPosition(images[nextSlide]),
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </>
            )}

            <AnimatePresence>
                {isHovered && !isTransitioning && (
                    <motion.div
                        className="pointer-events-none absolute z-30 hidden lg:block"
                        animate={{
                            left: `${contentPosition.x}%`,
                            top: `${contentPosition.y}%`,
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            left: {
                                type: "spring",
                                stiffness: 250,
                                damping: 25,
                            },
                            top: {
                                type: "spring",
                                stiffness: 250,
                                damping: 25,
                            },
                        }}
                    >
                        {images[activeSlide].content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}