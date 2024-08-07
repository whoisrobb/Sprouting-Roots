import Faqs from "./faqs"
import Intro from "./intro"
import Landing from "./landing"
import Nourish from "./nourish"
import Services from "./services"

const Home = () => {
  return (
    <div className="space-y-4 bg-secondary text-primary">
        <Landing />
        <Intro />
        <Nourish />
        <Services />
        <Faqs />
    </div>
  )
}

export default Home