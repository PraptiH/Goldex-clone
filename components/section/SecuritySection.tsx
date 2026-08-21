"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import shield from "@/public/Images/sheild.png";

export default function SecuritySection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const lastScrollY = useRef(0);

    const [direction, setDirection] = useState<
        "down" | "up"
    >("down");

    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const element = sectionRef.current;

        if (!element) return;

        lastScrollY.current = window.scrollY;

        let scrollDirection: "down" | "up" = "down";

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                scrollDirection = "down";
            } else if (currentScrollY < lastScrollY.current) {
                scrollDirection = "up";
            }

            lastScrollY.current = currentScrollY;
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setDirection(scrollDirection);

                    setAnimationKey(
                        (previous) => previous + 1
                    );
                }
            },
            {
                threshold: 0.35,
            }
        );

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        observer.observe(element);

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            observer.disconnect();
        };
    }, []);

    return (
        <div ref={sectionRef} className="flex flex-col items-center justify-center py-20">
            <div className="relative size-50 md:size-63.5 overflow-hidden">

                <Image width="263" height="263" className="size-full obeject-contain" src={shield} alt="" />


                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden"
                    style={{
                        maskImage: `url(${shield.src})`,
                        maskSize: "100% 100%",
                        maskRepeat: "no-repeat",
                        WebkitMaskImage: `url(${shield.src})`,
                        WebkitMaskSize: "100% 100%",
                        WebkitMaskRepeat: "no-repeat",
                    }}
                >
                    <div key={animationKey} className={
                        direction === "down"
                            ? "shield-shine shield-shine-down"
                            : "shield-shine shield-shine-up"
                    }
                    />
                </div>
            </div>

            <p className="mt-6 max-w-132.5 text-lg text-black text-center leading-normal">
                Every trade and purchase is processed under a
                registered jewelry shop. You always know exactly
                where your gold is, who holds it, and you can walk
                in whenever you want.
            </p>
        </div>
    );
}