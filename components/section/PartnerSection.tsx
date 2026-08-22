"use client"

import { useRef } from "react"
import Image from "next/image"
import hafsa from "@/public/Images/Logo2.avif"
import aah from "@/public/Images/Logo3.png"
import karnaphuli from "@/public/Images/Logo4.png"
import kds from "@/public/Images/Logo5.png"
import gold from "@/public/Images/Logo6.png"

const driftDuration = 10

export default function PartnerSection() {
    const trackRef = useRef<HTMLDivElement>(null)

    const partners = [hafsa, aah, karnaphuli, kds, gold,hafsa, aah, karnaphuli, kds, gold,hafsa, aah, karnaphuli, kds, gold]

    const partnerList = [...partners, ...partners, ...partners]

    const pauseDrift = () => {
        if (trackRef.current) {
            trackRef.current.style.animationPlayState = "paused"
        }
    }

    const resumeDrift = () => {
        if (trackRef.current) {
            trackRef.current.style.animationPlayState = "running"
        }
    }

    return (
        <section className="py-12 lg:py-15 xl:py-20">
            <div
                className="w-full overflow-hiddenlg:mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
                onMouseEnter={pauseDrift}
                onMouseLeave={resumeDrift}
            >
                <div ref={trackRef} className="flex items-center gap-0 cursor-pointer animate-marquee"
                    style={{
                        animationDuration: `${driftDuration}s`,
                    }}
                >
                    {partnerList.map((partner, index) => (
                        <div key={index} className="flex shrink-0 items-center justify-center">
                            <Image src={partner} alt="" width={243} height={64}
                                className="h-16 w-auto max-w-none object-contain opacity-50 transition-opacity duration-300 hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}