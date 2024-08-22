
type LandingProps = {
    imgSrc: string;
    title: string;
    subtitle: string;
}

const Landing = ({ imgSrc, title, subtitle }: LandingProps) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
        <img
            className="h-full w-full object-cover"
            src={imgSrc}
            alt=""
        />

        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
            <div className="text-secondary text-center md:gap-8">
                <h1 className="font-serif text-6xl">{title}</h1>
                <div className="max-w-[35rem] leading-tight">
                    {subtitle}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing