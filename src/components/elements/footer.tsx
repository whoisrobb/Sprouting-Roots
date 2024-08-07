import { pages } from "@/config/pages"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import FooterScroll from "./footer-scroll"


const Footer = () => {
  return (
    <div className="w-full overflow-x-hidden bg-primary relative h-[75vh] text-secondary space-y-12 flex items-center justify-start flex-col py-8">
        <div className="font-serif capitalize flex items-center justify-between font-[300] text-4xl w-full max-w-[35rem]">
            <Link
                to={'/'}
                className="hover:text-tertiary"
            >
                home
            </Link>

            {pages.map((page) => (
                <Link
                    to={page.href}
                    key={page.title}
                    className="hover:text-tertiary"
                >
                    {page.title}
                </Link>
            ))}
        </div>
        
        <div className="w-full max-w-[25rem] space-y-4">
            <Input className="w-full rounded-none border-t-transparent border-l-transparent border-r-transparent" placeholder="Enter your email" />
            <Button
                variant="expandIcon"
                Icon={ArrowRightIcon}
                iconPlacement="right"
                className="capitalize font-sans bg-tertiary rounded-full text-primary w-full hover:bg-tertiary"
            >
                subscribe
            </Button>
        </div>

        <FooterScroll />
    </div>
  )
}

export default Footer