import { features } from "@/lib/featuresData"
import HoverSlideImage from "./HoverSlideImage"

export default function FeatureSection() {
    return (

        <div className="mx-auto max-w-304 space-y-24 px-5 pb-12 md:pb-16">
            {features.map((feature) => (
                <div key={feature.title} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    <div className={feature.imageSide === "right"
                        ? "lg:order-2"
                        : "lg:order-1"
                    }>
                        <HoverSlideImage
                            image={feature.image}
                            hoverImage={feature.hoverImage}
                            alt={feature.title}
                        />
                    </div>


                    <div className={feature.imageSide === "right"
                        ? "lg:order-1"
                        : "lg:order-2"
                    }>
                        <h2 className="font-bold text-4xl md:text-[40px] leading-tight">
                            {feature.title}
                        </h2>

                        <p className="mt-5 lext-lg text-black/50 leading-relaxed">
                            {feature.description}
                        </p>

                        <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 md:p-0 font-medium text-sm md:text-base md:text-black/25 opacity-100 bg-[#f4f4f4] md:bg-transparent">
                            {feature.link}
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

