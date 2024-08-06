import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { expand, opacity } from '@/lib/anim';
import Header from '@/components/elements/header';
import Footer from '@/components/elements/footer';

const Layout = () => {

    const anim = (variants: any, custom: number | null = null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    const nbOfColumns = 5;
    return (
        <div className={'relative'}>
            <motion.div {...anim(opacity)} className="fixed top-0 left-0 w-full h-screen bg-black pointer-events-none z-10" />
            <div className="fixed inset-0 flex pointer-events-none z-20">
                {
                    [...Array(nbOfColumns)].map((_, i) => {
                        return (
                            <motion.div key={i} {...anim(expand, nbOfColumns - i)} className="relative h-full w-full bg-tertiary border-r" />
                        )
                    })
                }
            </div>
            
            <Header />
            <div className="w-full overflow-x-hidden">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout