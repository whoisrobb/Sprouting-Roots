import { useRef } from "react";
import ContactForm from "../_components/contact-form";
import useSplitPara from "../hooks/useSplitPara";

const paragraph = "We’re a dedicated gardening consultancy: offering everything you need to start, sustain, and elevate your gardening journey. And we’re here to help. Have questions about our services? Interested in a collaboration? Or a fellow gardener looking to join a vibrant community? Reach out."
const txt = "This is your garden. Nurture it and watch it thrive.";
const emailTxt = "Email us directly."
const mailAddress = "support@sproutingroots.com"

const ContactSection = () => {
    const container = useRef(null);
  
    const title = useSplitPara(txt, container);
    const para = useSplitPara(paragraph, container);
    const emailText = useSplitPara(emailTxt, container);
    const email = useSplitPara(mailAddress, container);

  return (
    <div className="p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div ref={container} className="space-y-2">
                <p className="md:text-7xl text-4xl font-[300] font-serif flex flex-wrap gap-x-2">
                    {title}
                </p>
                <p className="leading-tight flex flex-wrap gap-x-2">
                    {para}
                </p>
                <p className="leading-tight flex flex-wrap gap-x-2">
                    {emailText}
                </p>
                <p className="leading-tight flex flex-wrap gap-x-2">
                    {email}
                </p>
            </div>
            <ContactForm />
        </div>
    </div>
  )
}

export default ContactSection
