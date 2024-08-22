import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

type ServiceComponentProps = {
    imgSrc: string;
    title: string;
    subtitle: string;
    btnText: string;
}

const ServiceComponent = ({ imgSrc, title, subtitle, btnText }: ServiceComponentProps) => {
  return (
    <div className={`flex border-t md:flex-row flex-col border-t-primary py-8 gap-8 items-center justify-between`}>
        <div className="max-w-full h-48 aspect-[3/1] rounded-lg overflow-hidden">
            <img
                src={imgSrc}
                className="h-full w-full object-cover"
            />
        </div>

        <div className="space-y-2">
            <h1 className="font-serif md:text-5xl font-thin text-primary">{title}</h1>
            <p className="text-muted-foreground">{subtitle}</p>
            <Button
                variant="expandIcon"
                Icon={ArrowRightIcon}
                iconPlacement="right"
                className="bg-transparent border border-primary text-primary hover:text-tertiary"
            >
                {btnText}
            </Button>
        </div>
    </div>
  )
}

export default ServiceComponent
