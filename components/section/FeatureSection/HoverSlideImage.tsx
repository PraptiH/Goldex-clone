"use client"

import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"

interface HoverSlideImageProps {
    image: StaticImageData
    hoverImage: StaticImageData
    alt?: string
}

export default function HoverSlideImage({
    image,
    hoverImage,
    alt = "",
}: HoverSlideImageProps) {
    return (
        <motion.div
            className="relative aspect-square w-full h-120 md:h-162.5 overflow-hidden"
            initial="initial"
            whileHover="hover"
        >

            <Image src={image} alt={alt} fill sizes="(min-width:1024px) 608px, 100vw"
                className="object-cover" />


            <motion.div className="absolute inset-0"
                variants={{
                    initial: {
                        x: "-100%",
                    },
                    hover: {
                        x: "0%",
                    },
                }}
                transition={{
                    duration: 0.7,
                    ease: [0.76, 0, 0.24, 1],
                }}
            >
                <Image src={hoverImage} alt={alt} fill sizes="(min-width:1024px) 608px, 100vw"
                    className="object-cover"/>
            </motion.div>
        </motion.div>
    )
}