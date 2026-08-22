import liveTrading from "@/public/Images/lifestyle1.png"
import liveTrading2 from "@/public/Images/app1.avif"
import jewelry from "@/public/Images/lifestyle2.png"
import jewelry2 from "@/public/Images/app2.avif"
import storage from "@/public/Images/lifestyle3.avif"
import storage2 from "@/public/Images/app3.avif"
import { StaticImageData } from "next/image"

type Feature= {
    title: string
    description: string
    link: string
    image: StaticImageData
    hoverImage: StaticImageData
    imageSide: "left" | "right"
}

export const features : Feature[] = [
    {
        title: "Live Trading, in seconds.",
        description: "Full-featured Gold & Silver trading from your phone. Monitor live prices, manage positions, and act on the market — anytime, anywhere. Simple enough for first timers. Capable enough for veterans.",
        link: "Trade with Goldex",
        image: liveTrading,
        hoverImage: liveTrading2,
        imageSide: "left",
    },

    {
        title: "Buy real jewelry, from your home.",
        description: "Buy directly from trusted jewelry shops and have your order delivered to your door. Every piece is certified, fairly priced, and always yours.",
        link: "Buy gold",
        image: jewelry,
        hoverImage: jewelry2,
        imageSide: "right",
    },

    {
        title: "Save your gold and silver, safely.",
        description: "Every gram you own is securely stored, independently audited, fully insured, and always available when you need it.",
        link: "Save in Safety Vault",
        image: storage,
        hoverImage: storage2,
        imageSide: "left",
    },
]