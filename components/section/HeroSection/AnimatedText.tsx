"use client";

import { motion } from "framer-motion";

type AnimatedTextProps = {
    text: string;
    delay?: number;
};

const offsets = [
    -30, -28, -26, -24,
    -30, -28, -26, -24,
    -20, -18, -16, -14,
    -12, -10, -8, -7,
    -6, -5, -4,
];



export default function AnimatedText({
    text,
    delay = 0,
}: AnimatedTextProps) {
    return (
        <span className="inline-block">
            {text.split("").map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    animate={{
                        y: [0, offsets[index % offsets.length], 0],
                    }}
                    transition={{
                        delay: delay + index * 0.07,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}