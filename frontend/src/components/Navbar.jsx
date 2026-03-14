import { Link } from "react-router-dom"

export default function Navbar(){
  return(
    <nav className="bg-black/40 backdrop-blur-md border-b border-white/10 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-purple-400 tracking-wide hover:text-purple-300 transition">
            AI Health
          </h1>
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm text-gray-200 font-medium">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/predictor" className="hover:text-purple-400 transition">Predictor</Link>
          <Link to="/dashboard" className="hover:text-purple-400 transition">Analytics</Link>
          <Link to="/blog" className="hover:text-purple-400 transition">Blog</Link>
          <Link to="/about" className="hover:text-purple-400 transition">About</Link>
        </div>
        
        <div className="flex gap-4 items-center">
          <Link to="/login" className="text-gray-200 hover:text-white font-medium transition hidden shadow-sm sm:inline-block">Login</Link>
          <Link to="/signup" className="bg-purple-600 hover:bg-purple-500 font-medium px-5 py-2.5 rounded-lg shadow-lg hover:shadow-purple-500/30 transition text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}
