import ContentShell from '@/components/shells/content-shell';
import { useRef } from 'react';
import useSplitPara from '../hooks/useSplitPara';

const paragraph = "We believe that every individual has the power to cultivate their own food haven. No matter your gardening experience or available space, we're here to guide you on your journey towards a greener, healthier life. From the first seed to a bountiful harvest, we'll be your dedicated partner in creating a sustainable and thriving garden.";
const txt = "Let's cultivate a world where fresh, nutritious food is accessible to all.";

const Nourish = () => {
  const description = useRef(null);

  const para = useSplitPara(paragraph, description);
  const text = useSplitPara(txt, description);

  return (
    <ContentShell
        title='Nourish your world'
        className='text-secondary bg-primary'
    >
        <div ref={description} className="flex md:flex-row justify-around space-y-8 py-12 flex-col">
          <div className="w-full max-w-[35rem] space-y-6">
            <p className="font-space">Discover the joy of homegrown goodness.</p>
            <p className="md:text-7xl text-4xl font-[300] font-serif flex flex-wrap gap-x-2">
              {text}
            </p>
          </div>
          <div className="w-full max-w-[30rem] space-y-4">
            <p className="leading-tight flex flex-wrap gap-x-2">
              {para}
            </p>
            <div className="w-full aspect-square rounded-lg overflow-hidden">
              <img
                className='w-full h-full object-cover'
                src={'https://utfs.io/f/b9c93e6c-8cac-4b91-ad6d-bc9ccad1f928-4x001t.jpeg'}
                alt=""
              />
            </div>
          </div>
        </div>
    </ContentShell>
  )
}

export default Nourish