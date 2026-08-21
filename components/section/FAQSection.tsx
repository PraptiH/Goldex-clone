import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
    const items = [
        {
            value: "item-1",
            trigger: "What is Goldex Super App?",
            content: "Goldex is a super app for buying, selling, and holding real gold and silver through trusted jewelry shops."
        },
        {
            value: "item-2",
            trigger: "Where is my gold stored?",
            content: "Your gold is held by registered jewelry partners, insured and audited. The app always shows which shop holds it."
        },
        {
            value: "item-3",
            trigger: "Can I sell or collext my gold?",
            content: "Yes. Sell back through the app, or visit a partner shop to collect physical gold after verification."
        },
        {
            value: "item-4",
            trigger: "How are gold proces calculated?",
            content: "Prices follow live market rates from partner shops, updated continuously so what you see is what you trade."
        },
        {
            value: "item-5",
            trigger: "Is my gold insecured",
            content: "Yes. Holdings are insured through our jewelry partners. Coverage details sit on each shop profile in the app."
        },
        {
            value: "item-6",
            trigger: "Which jewelry shops can I visit?",
            content: "Partner shops are listed in the app by city. Open the map to sees, address, and what you can collect there."
        }
    ]
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start md:justify-between gap-12 md:gap-16 px-5 pt-10 md:pt-28 pb-14 md:pb-16 max-w-304 mx-auto">
            <div className="flex flex-col shrink-0 items-center md:items-start gap-5 text-center lg:text-start w-full max-w-126.75">
                <h1 className="font-bold text-[32px] md:text-[40px] leading-normal">Frequently Asked Questions</h1>

                <div className="flex gap-1.5 text-center min-w-0 mx-auto lg:mx-0">
                    <p className="text-black/50">Still wondering?</p>
                    <p className="font-medium text-black underline-offset-4 hover:underline cursor-pointer">Contact us</p>
                </div>
            </div>

            <div className="w-full max-w-155 shrink-0 overflow-hidden relative">
                <Accordion defaultValue={["item-1"]}>
                    {items.map((item) => (
                        <AccordionItem key={item.value} value={item.value}
                            className="px-6 py-3.5 border-b last:border-b-0 border-black/10">
                            <AccordionTrigger className="font-medium text-lg md:text-xl cursor-pointer">{item.trigger}</AccordionTrigger>
                            <AccordionContent className="text-sm md:text-base pt-2 pb-5 text-black/50">{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}