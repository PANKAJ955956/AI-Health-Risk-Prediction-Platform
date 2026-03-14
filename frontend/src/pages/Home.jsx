import HeroSection from "../components/HeroSection"
import Features from "../components/Features"
import Stats from "../components/Stats"
import Insights from "../components/Insights"
import Contact from "../components/Contact"

export default function Home(){
  return(
    <div className="w-full">
      <HeroSection />
      <Features />
      <Stats />
      <Insights />
      <Contact />
    </div>
  )
}
