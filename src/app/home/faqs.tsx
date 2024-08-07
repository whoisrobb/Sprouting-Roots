import ContentShell from "@/components/shells/content-shell"
import { FaqAccordion } from "./_components/accordion"


const Faqs = () => {
  return (
    <ContentShell
        title=""
        className="bg-tertiary"
    >
        <div className="flex md:flex-row justify-around space-y-8 py-12 flex-col">
            <div className="w-full">
                <p className="md:text-7xl text-4xl font-[300] font-serif">Your answers to</p>
                <p className="md:text-7xl text-4xl font-[300] font-serif italic">Frequently asked questions</p>
            </div>

            <FaqAccordion />
        </div>
    </ContentShell>
  )
}

export default Faqs