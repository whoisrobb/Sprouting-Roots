import ContentShell from "@/components/shells/content-shell"
import { useRef } from "react"
import useSplitPara from "../hooks/useSplitPara"

const title1 =  "Beginner's Guide"
const paragraph1 = "New to gardening? We offer step-by-step guides and personalized advice to help you start growing your own food with confidence."

const title2 = "Advanced Techniques"
const paragraph2 = "For seasoned gardeners, we provide insights into advanced techniques to maximize your garden's yield and sustainability."

const title3 = "Workshops & Webinars"
const paragraph3 = "Join our interactive workshops and webinars to learn practical skills and connect with other gardening enthusiasts."


const Services = () => {
    const container = useRef(null);
    const t1 = useSplitPara(title1, container);
    const t2 = useSplitPara(title2, container);
    const t3 = useSplitPara(title3, container);

    const p1 = useSplitPara(paragraph1, container);
    const p2 = useSplitPara(paragraph2, container);
    const p3 = useSplitPara(paragraph3, container);
  return (
    <ContentShell
        title="02/ Our services"
        className="text-primary"
    >
        <div className="h-[75vh] flex items-center justify-center">
            <div className="space-y-4">
            <div ref={container} className="text-primary space-y-2 flex gap-4 lg:flex-row flex-col justify-between w-full max-w-[900px] items-start">
                <div className="text-center">
                    <h1 className="text-2xl font-sans font-[700] flex flex-wrap gap-x-2">
                        {t1}
                    </h1>
                    <p className="leading-tight flex flex-wrap gap-x-2">
                        {p1}
                    </p>
                </div>
            </div>
            
            <div className="text-primary space-y-2 flex gap-4 lg:flex-row flex-col justify-between w-full max-w-[900px] items-start">
                <div className="">
                    <h1 className="text-2xl font-sans font-[700] flex flex-wrap gap-x-2">
                        {t2}
                    </h1>
                    <p className="leading-tight flex flex-wrap gap-x-2">
                        {p2}
                    </p>
                </div>
            </div>

            <div className="text-primary space-y-2 flex gap-4 lg:flex-row flex-col justify-between w-full max-w-[900px] items-start">
                <div className="">
                    <h1 className="text-2xl font-sans font-[700] flex flex-wrap gap-x-2">
                        {t3}
                    </h1>
                    <p className="leading-tight flex flex-wrap gap-x-2">
                        {p3}
                    </p>
                </div>
            </div>
            </div>
        </div>
    </ContentShell>
  )
}

export default Services