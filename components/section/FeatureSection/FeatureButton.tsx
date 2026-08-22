"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, useState } from "react";

type FeatureButtonProps = {
    text: string;
    href?: string;
};

export default function FeatureButton({
    text,
    href = "#",
}: FeatureButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const x = useSpring(mouseX, {
        stiffness: 70,
        damping: 20,
        mass: 0.5,
    });

    const y = useSpring(mouseY, {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    });

    const handleMouseMove = (
        event: MouseEvent<HTMLDivElement>
    ) => {
        const rect = event.currentTarget.getBoundingClientRect();

        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
    };

    return (
        <div className="relative mt-6 hidden h-55 w-full lg:block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >

            <motion.a href={href} className="absolute left-0 top-1/2 z-10 flex -translate-y-1/2 items-center gap-2 text-base font-medium text-black/25"
                animate={{
                    opacity: isHovered ? 0 : 1,
                }}
                transition={{
                    duration: 0.15,
                }}>
                {text}

                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="mt-1 size-4">
                    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                </svg>
            </motion.a>

            <motion.a href={href} className="pointer-events-none absolute left-0 top-0 z-20 flex flex-col items-center justify-center size-46 -translate-x-1/2 -translate-y-1/2 rounded-full 
            bg-[linear-gradient(144deg,#f0de83,#c49a20)] text-center font-semibold text-black"
                style={{ x, y }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: isHovered ? 1 : 0,
                    opacity: isHovered ? 1 : 0,
                }}
                transition={{
                    scale: {
                        duration: 0.3,
                        ease: [0.76, 0, 0.24, 1],
                    },
                    opacity: {
                        duration: 0.15,
                    },
                }}
            >
                <span>{text}</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="mt-1 size-4">
                    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                </svg>
            </motion.a>
        </div>
    );
}

