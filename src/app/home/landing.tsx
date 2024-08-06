import Magnetic from "@/components/elements/magnetic"
import { Button } from "@/components/ui/button"
import TextScroll from "./text-scroll"


const Landing = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
        <img
            className="h-full w-full object-cover"
            src={'https://utfs.io/f/ca317741-3a57-4f69-a5fb-2c49aab0481c-o4uet6.jpg'}
            alt=""
        />

        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
            <div className="flex md:flex-row flex-col items-end md:gap-8">
                <div className="max-w-[35rem] text-center leading-tight text-secondary">
                    At Sprouting Roots Consultancy, we recognize every garden and gardener is unique. We provide personalized advice based on your specific goals, space, and experience, focusing on sustainable practices to ensure your garden thrives and benefits the environment.
                </div>

                <Magnetic>
                    <Button className="uppercase bg-primary text-tertiary border border-tertiary aspect-square h-36 text-sm font-space rounded-full">
                        start today
                    </Button>
                </Magnetic>

            </div>
            <TextScroll />
        </div>
    </div>
  )
}

export default Landing