import Intro from "./intro"
import Landing from "./landing"
import Services from "./services"

const Home = () => {
  return (
    <div className="space-y-4 bg-secondary text-primary">
        <Landing />
        <Intro />
        <Services />
    </div>
  )
}

export default Home