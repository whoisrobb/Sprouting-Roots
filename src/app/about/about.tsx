import { MarqueeDemo } from "@/components/elements/marquee-reviews"
import Landing from "../_components/landing"
import MeetChris from "./meet-chris"


const About = () => {
  return (
    <div className="min-h-[100vh]">
      <Landing
        imgSrc={'https://utfs.io/f/d593872d-af4b-4147-804c-ac7453c8ca97-7865p7.jpg'}
        title={'About'}
        subtitle={"The goal is to empower you to GROW nutritious sustainable food!  We start the training wherever you are in your gardening experience."}
      />
      <MeetChris />
      <MarqueeDemo />
    </div>
  )
}

export default About