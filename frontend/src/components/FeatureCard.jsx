import { motion } from "framer-motion"

export default function FeatureCard({title, desc, icon}){
  return(
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl transition-colors duration-300 hover:bg-white/15 cursor-pointer"
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="text-gray-300 mt-3 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  )
}
