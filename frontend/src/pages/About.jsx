import { ShieldAlert, Cpu, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.8}}
      className="w-full max-w-4xl mx-auto px-6 py-12"
    >
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">AI Health Mission</h1>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
          Bridging the critical gap between advanced Machine Learning models and global preventative healthcare.
        </p>
      </header>

      <motion.div 
        whileHover={{scale: 1.02}}
        className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl mb-16 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Heart className="w-48 h-48 text-purple-500" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Platform Overview</h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-6 relative z-10">
          We built this platform to provide individuals with an accessible, completely private, and highly accurate approach to disease detection. By leveraging standardized clinical datasets, we train specialized Random Forest and XGBoost ensemble ML models that can predict your risk profile in mere milliseconds.
        </p>
        <p className="text-gray-300 leading-relaxed text-lg relative z-10">
          No waiting rooms, no expensive consultations. Just pure data evaluating multiple physiological inputs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div whileHover={{y: -5}} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 transition duration-300 shadow-xl">
          <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <Cpu className="text-blue-400 h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Model Accuracy</h3>
          <p className="text-gray-300 leading-relaxed">
            All models are cross-validated against datasets from the UCI Machine Learning Repository to ensure an accuracy threshold above 85% for all critical risk parameters.
          </p>
        </motion.div>
        
        <motion.div whileHover={{y: -5}} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 transition duration-300 shadow-xl">
          <div className="bg-emerald-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <ShieldAlert className="text-emerald-400 h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Data Privacy</h3>
          <p className="text-gray-300 leading-relaxed">
            Your physiological data points are immediately processed by our localized API arrays and are never indefinitely stored or sold. Your health matrix remains entirely yours.
          </p>
        </motion.div>
      </div>

      <div className="text-center pt-10 border-t border-white/10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Core Developer</h2>
        <p className="text-purple-400 text-3xl font-extrabold mb-2">Pankaj Kumar</p>
        <p className="text-gray-300 font-medium">Full-Stack Data Scientist & ML Engineer</p>
      </div>
    </motion.div>
  );
}
