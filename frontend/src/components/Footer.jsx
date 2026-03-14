import { Link } from "react-router-dom"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer(){
  return(
    <footer className="bg-black/60 border-t border-white/5 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center md:flex md:justify-between items-center text-gray-400">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white mb-2">AI Health Risk Predictor</h2>
            <p className="text-sm">Built with AI + Data Science</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-6 md:mb-0">
            <Link to="/" className="hover:text-purple-400 transition">Home</Link>
            <Link to="/predictor" className="hover:text-purple-400 transition">Predictor</Link>
            <Link to="/blog" className="hover:text-purple-400 transition">Blog</Link>
            <Link to="/about" className="hover:text-purple-400 transition">Contact</Link>
          </div>
          
          <div className="flex gap-4 justify-center">
            <a href="#" className="hover:text-purple-400 transition"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-400 transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-400 transition"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-8 pt-8 border-t border-white/5">
          <p>© 2026 Pankaj Kumar. AI Health Risk Predictor.</p>
        </div>
      </div>
    </footer>
  )
}
