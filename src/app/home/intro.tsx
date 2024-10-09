import ContentShell from "@/components/shells/content-shell";
import { useRef } from "react";
import useSplitPara from "../hooks/useSplitPara";
import image from "/gardem-huckleberries.jpg";
import Magnetic from "@/components/elements/magnetic";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const p1 = "At Sprouting Roots Consultancy, we believe that everyone has the potential to grow their own food, regardless of their experience level or the space they have. Our mission is to empower individuals and communities to cultivate nutritious and sustainable gardens, creating a greener future for all. Whether you're a novice gardener looking to start small or an experienced grower seeking advanced techniques, we're here to support you every step of the way."

export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i: number) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.01 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}

const Intro = () => {
    const description = useRef(null);

    const paragraph = useSplitPara(p1, description);

  return (
    <ContentShell
        title="01/ Who we are"
        className="text-primary"
    >
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:py-0 py-12 items-center">

            <div ref={description} className="relative space-y-8">
                <h1 className="text-black font-bold text-4xl capitalize">The restorative magic of <br/><span className="text-primary">your garden</span></h1>

                <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full max-w-[900px] items-start text-muted-foreground">
                    <p className="text-xl leading-tight flex flex-wrap gap-x-2">
                        {paragraph}
                    </p>

                </div>
            </div>

            <div className="h-full w-full relative">
                <div className="w-full aspect-square overflow-hidden rounded-xl">
                    <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="absolute p-4 -bottom-20 -right-10 bg-secondary rounded-full">
                    <Magnetic>
                        <Link
                            className={cn(buttonVariants(), "uppercase bg-tertiary text-primary hover:text-tertiary border border-tertiary aspect-square h-36 text-sm font-space rounded-full")}
                            to={'/about'}
                        >
                            learn more
                        </Link>
                    </Magnetic>
                </div>
            </div>
        </div>

    
    </ContentShell>
  )
}

export default Intro