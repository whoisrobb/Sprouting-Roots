import { useEffect } from "react"
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./app/home/home"
import About from "./app/about/about"
import Layout from "./app/layout"
// import Preloader from "./app/preloader"
import WorkWithChris from "./app/collaborate/work-with-chris"
import Contact from "./app/contact/contact"

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis()
    
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    // setTimeout(() => {
    //   setIsLoading(false);
    //   document.body.style.cursor = 'default'
    // }, 3500)
  }, []);

  return (
    <div className='font-sans bg-secondary'>
      <AnimatePresence mode="wait">
      {/*   {isLoading ?
        <Preloader />
        : */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work-with-chris" element={<WorkWithChris />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        {/* } */}
        </AnimatePresence>
    </div>
  )
}

export default App
