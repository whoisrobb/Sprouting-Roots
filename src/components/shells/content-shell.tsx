import { HTMLAttributes, ReactNode } from "react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import useSplitText from "@/app/hooks/useSplitText";

type ContentShellProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    subtitle?: string;
    children: ReactNode;
}

const ContentShell = ({ title, subtitle, children, className }: ContentShellProps) => {
  const titleText = useSplitText(title, "letter");
  return (
    <div
        className={cn('lg:px-12 md:px-8 px-4', className)}
    >
        <Separator />
        <div className="my-4">
            <div className="font-space font-[700] uppercase text-3xl flex clip-polygon">{titleText}</div>
            <p className="text-muted-foreground">{subtitle}</p>
        </div>

        {children}
    </div>
  )
}

export default ContentShell