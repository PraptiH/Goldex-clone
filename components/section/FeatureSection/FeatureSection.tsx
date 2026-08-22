import { features } from "@/lib/featuresData"
import HoverSlideImage from "./HoverSlideImage"
import FeatureButton from "./FeatureButton"

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
                        <h2 className="font-bold text-4xl md:text-[40px] leading-tight">{feature.title}</h2>

                        <p className="mt-5 lext-lg text-black/50 leading-relaxed">{feature.description}</p>
                        
                        <FeatureButton text={feature.link}/>
                       
                    </div>
                </div>
            ))}
        </div>
    )
}

