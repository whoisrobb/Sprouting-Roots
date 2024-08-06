import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import Logo from './logo';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

const Header = () => {
    const [hidden, setHidden] = useState(false);
    const lastYRef = useRef(0);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const difference = latest - lastYRef.current;
        // const previous = scrollY.getPrevious();
        if (Math.abs(difference) > 50) {
            setHidden(difference > 0);

            lastYRef.current = latest;
        }
    })

  return (
    <motion.header
        className="fixed bg-secondary border rounded-md md:px-4 px-2 md:top-4 top-2 md:left-4 left-2 md:right-4 right-2 h-24 z-[100] flex justify-between items-center"
        variants={{
            visible: { y: 0 },
            hidden: { y: '-150%' }
        }}
        animate={hidden ? 'hidden': 'visible'}
        transition={{ duration: 0.2 }}
    >
        <Logo className='w-16' />

        <DesktopNav />
        <MobileNav />
    </motion.header>
  )
}

export default Header