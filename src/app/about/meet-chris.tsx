import ContentShell from '@/components/shells/content-shell';
import { useRef } from 'react';
import useSplitPara from '../hooks/useSplitPara';

const p1 = "She felt the same way.  Chris has been gardening for over a decade now. She started gardening when she was a stay at home mom and built her first raised bed with the help of her nephew."
const p2 = "With the first successful harvest, she was hooked! Her love of nature and Degree in Biology are a natural fit. With some trial and error, she got the knowledge needed to plan, grow, and maintain a healthy garden retreat year after year.  Gardening quickly turned into her passion and so now, she teaches others how to supplement their food source and grow their own food."
const p3 = "In 2015, she spearheaded a community garden with the help of some AWESOME friends and Fantastic donors.  Last year, she started consulting, volunteering and donated thousands of seeds to local schools that have STEAM and Learning gardens."
const p4 = "As the owner of Sprouting Roots Consulting, LLC, she wants to help you Cultivate your Green Thumb and grow in the space available to you."

const MeetChris = () => {
    const description = useRef(null);

    const paragraph1 = useSplitPara(p1, description);
    const paragraph2 = useSplitPara(p2, description);
    const paragraph3 = useSplitPara(p3, description);
    const paragraph4 = useSplitPara(p4, description);

  return (
    <ContentShell
        title='Meet Chris'
    >
        <div ref={description} className="flex md:flex-row justify-around space-y-8 py-12 flex-col">
            <div className="w-full max-w-[35rem] space-y-6">
                <p className="font-space">Are you ready to harvest fresh fruits & veggies from your garden?  DO you keep telling yourself  “I don’t have a Green Thumb”.   Let me introduce you to Chris.</p>
                <p className="font-[300] flex flex-wrap gap-x-2">
                    {paragraph1}
                </p>
                <p className="font-[300] flex flex-wrap gap-x-2">
                    {paragraph2}
                </p>
                <p className="font-[300] flex flex-wrap gap-x-2">
                    {paragraph3}
                </p>
                <p className="font-[300] flex flex-wrap gap-x-2">
                    {paragraph4}
                </p>
            </div>
          <div className="w-full max-w-[30rem] space-y-4">
            <div className="w-full aspect-square rounded-lg overflow-hidden">
              <img
                className='w-full h-full object-cover object-top'
                src={'https://utfs.io/f/f5042a25-3c1e-4dcd-a088-93529e438d45-fara7j.png'}
                alt=""
              />
            </div>
          </div>
        </div>
    </ContentShell>
  )
}

export default MeetChris