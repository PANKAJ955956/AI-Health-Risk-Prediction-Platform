import BlogCard from "../components/BlogCard"
import { motion } from "framer-motion"

export default function Blog(){
  return(
    <motion.div 
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
      className="w-full max-w-7xl mx-auto px-6 py-12 pb-20"
    >
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Health Knowledge Base
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Stay informed on medical advice and preventative measures written by verified clinical professionals.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-10 mb-20">
        <BlogCard
          title="Prevent Diabetes Before It Starts"
          desc="Discover actionable steps to manage your blood sugar levels through advanced diet modifications and fasting routines."
          image="/images/diabetes.png"
        />
        <BlogCard
          title="Heart Healthy Cardiovascular Diets"
          desc="10 verified superfoods that are statistically proven to lower total cholesterol composition."
          image="/images/heart.png"
        />
        <BlogCard
          title="Protect Your Lungs In Smog Cities"
          desc="Analyze how daily PM2.5 exposure permanently decreases respiratory efficiency."
          image="/images/lungs.png"
        />
      </div>

      {/* Quick Tips Box */}
      <motion.div 
        whileHover={{scale: 1.01}}
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 mt-10 shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Daily Recommended Action Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-purple-400 mb-4 text-lg">Metabolic Health</h3>
            <ul className="text-gray-300 space-y-3 list-disc pl-5 marker:text-purple-500">
              <li>15 minutes of rigorous anaerobic exercise</li>
              <li>Eliminate refined sucrose</li>
              <li>Track glucose spikes after meals</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-400 mb-4 text-lg">Cardiovascular Output</h3>
            <ul className="text-gray-300 space-y-3 list-disc pl-5 marker:text-blue-500">
              <li>Target 10,000 baseline steps</li>
              <li>Schedule quarterly lipid panels</li>
              <li>Reduce sodium intake by 30%</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-emerald-400 mb-4 text-lg">Respiratory System</h3>
            <ul className="text-gray-300 space-y-3 list-disc pl-5 marker:text-emerald-500">
              <li>Run True-HEPA air purification</li>
              <li>Avoid cardiovascular exercise when AQI {'>'} 100</li>
              <li>Wear N95/KN95 masks in high traffic</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
