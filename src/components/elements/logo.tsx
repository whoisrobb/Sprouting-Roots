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
            src={'https://utfs.io/f/c6f80c9e-5c37-42a6-8e44-2aa3c942de54-u5qsta.png'}
            className={cn("", className)}
        />
    </Link>
  )
}

export default Logo