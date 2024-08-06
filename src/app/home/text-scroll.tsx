import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";


const TextScroll = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);

    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
          scrollTrigger: {
            trigger: document.documentElement,
            scrub: 0.5,
            start: 0,
            end: window.innerHeight,
            onUpdate: e => direction = e.direction * -1
          },
          x: "-500px",
        })
        requestAnimationFrame(animate);
    }, [])


    const animate = () => {
        if(xPercent < -100){
          xPercent = 0;
        }
        else if(xPercent > 0){
          xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    }
    
  return (
    <div className="absolute bottom-0 ">
        <div ref={slider} className="relative whitespace-nowrap font-space">
            <p ref={firstText} className="relative m-0 text-secondary text-[150px] font-medium pr-[50px]">
                {/* Freelance Developer - */}
                Rooted in Growth - 
            </p>
            <p ref={secondText} className="absolute left-full top-0 m-0 text-secondary text-[150px] font-medium pr-[50px]">
                {/* Freelance Developer - */}
                Blooming Success
            </p>
        </div>
    </div>

  )
}

export default TextScroll