import { pages } from "@/config/pages"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { buttonVariants } from "../ui/button"


const DesktopNav = () => {
  return (
    <div className="flex items-center">
        {pages.map((page) => (
            <Link
                to={page.href}
                key={page.title}
                className={cn("font-sans capitalize font-bold", buttonVariants({ variant: "linkHover2" }))}
            >
                {page.title}
            </Link>
        ))}
    </div>
  )
}

export default DesktopNav