import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export function FaqAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
        <AccordionTrigger>What is Sprouting Roots Consultancy?</AccordionTrigger>
        <AccordionContent>
            Sprouting Roots Consultancy is dedicated to empowering individuals and communities to grow nutritious, sustainable food. We provide tailored guidance and support to gardeners of all experience levels, helping you create thriving, eco-friendly gardens.
        </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
        <AccordionTrigger>How can I get started with your services?</AccordionTrigger>
        <AccordionContent>
            Getting started is easy! Simply contact us through our website, and we’ll schedule an initial consultation to discuss your goals, experience level, and garden space. From there, we’ll develop a personalized plan to help you succeed.
        </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
        <AccordionTrigger>What types of services do you offer?</AccordionTrigger>
        <AccordionContent>
            We offer a range of services including beginner gardening guides, advanced techniques, workshops, webinars, and personalized consultations. Whether you’re starting from scratch or looking to enhance your existing garden, we have something for you.
        </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
        <AccordionTrigger>Do you offer support for urban gardeners?</AccordionTrigger>
        <AccordionContent>
            Absolutely! We provide specialized guidance for urban gardening, helping you make the most of limited space with techniques like container gardening, vertical gardens, and balcony planting.
        </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
        <AccordionTrigger>Can you help with sustainable gardening practices?</AccordionTrigger>
        <AccordionContent>
            Yes, sustainability is a core part of our approach. We teach sustainable gardening practices such as composting, water conservation, and organic pest control to ensure your garden is both productive and environmentally friendly.
        </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
        <AccordionTrigger>What does a personalized consultation involve?</AccordionTrigger>
        <AccordionContent>
            During a personalized consultation, we assess your gardening goals, space, and experience level. We then provide tailored advice, resources, and a step-by-step plan to help you achieve a thriving garden.
        </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
        <AccordionTrigger>Do you offer any free resources?</AccordionTrigger>
        <AccordionContent>
            Yes, we provide a variety of free resources including articles, guides, and tutorials on our website. Subscribe to our newsletter for regular updates and access to exclusive content.
        </AccordionContent>
        </AccordionItem>

      </Accordion>
    )
  }
  