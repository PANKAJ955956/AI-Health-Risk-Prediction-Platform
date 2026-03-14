import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Login(){
  return(
    <div className="flex justify-center items-center py-20 px-4 min-h-[75vh]">
      <motion.div 
        initial={{opacity: 0, scale: 0.9, y: 30}}
        animate={{opacity: 1, scale: 1, y: 0}}
        transition={{duration: 0.6}}
        className="bg-white/10 border border-white/20 p-10 rounded-3xl w-full max-w-md shadow-2xl backdrop-blur-xl"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-300 text-sm">Sign in to orchestrate your health progression.</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">Email Data</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-colors shadow-inner"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <a href="#" className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors">Forgot password?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-colors shadow-inner"
            />
          </div>

          <motion.button 
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            type="button" 
            className="w-full bg-purple-600 hover:bg-purple-500 py-4 rounded-xl text-white font-bold text-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all mt-4"
          >
            Secure Sign In
          </motion.button>
        </form>
        
        <p className="mt-8 text-center text-gray-300 text-sm">
          Don't have a synchronized account? <Link to="/signup" className="text-purple-400 font-bold hover:text-purple-300 transition-colors">Sign up instantly</Link>
        </p>
      </motion.div>
    </div>
  )
}
