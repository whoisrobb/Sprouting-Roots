import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react"
import { Link } from "react-router-dom"

const Logo = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link
        to={'/'}
        onClick={handleScrollToTop}
    >
        <img
            src={'https://utfs.io/f/01711b69-89fd-49b2-b0d1-028eb992b496-np9mu4.jpg'}
            className={cn("", className)}
        />
    </Link>
  )
}

export default Logo