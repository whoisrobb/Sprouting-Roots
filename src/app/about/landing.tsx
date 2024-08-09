

const Landing = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
        <img
            className="h-full w-full object-cover"
            src={'https://utfs.io/f/d593872d-af4b-4147-804c-ac7453c8ca97-7865p7.jpg'}
            alt=""
        />

        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
            <div className="text-secondary text-center md:gap-8">
                <h1 className="font-serif text-6xl">About</h1>
                <div className="max-w-[35rem] leading-tight">
                    The goal is to empower you to GROW nutritious sustainable food!  We start the training wherever you are in your gardening experience.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing