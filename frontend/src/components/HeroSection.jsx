import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function HeroSection(){
  return(
    <section className="relative h-[600px] flex items-center">
      <img src="/images/health-ai.png" className="absolute w-full h-full object-cover" alt="Hero"/>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative max-w-7xl mx-auto px-6 text-white w-full">
        <motion.h1 
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          AI Powered Healthcare <br/>
          <span className="text-teal-400">Insights & Risk Prediction</span>
        </motion.h1>
        <p className="mt-6 text-lg text-gray-200 max-w-xl">
          Predict diabetes, heart disease, and lung complications early using artificial intelligence and real-time health analytics.
        </p>
        <Link to="/predictor" className="inline-block mt-8 px-8 py-4 bg-teal-600 rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/30">
          Start Health Assessment →
        </Link>
      </div>
    </section>
  )
}
