import { motion } from "framer-motion"

export default function BlogCard({title, image, desc}){
  return(
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl cursor-pointer hover:bg-white/15 transition-colors duration-300"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 z-10 hover:bg-transparent transition duration-300"></div>
        <img src={image} alt={title} className="w-full h-full object-cover"/>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-300 mb-6">
          {desc || "Read health insights and preventive tips."}
        </p>
        <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors inline-block mt-auto text-sm">Read Full Article →</span>
      </div>
    </motion.div>
  )
}
