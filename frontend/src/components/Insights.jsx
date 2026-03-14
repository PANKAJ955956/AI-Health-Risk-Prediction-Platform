import { Link } from "react-router-dom"

export default function Insights(){
  return(
    <section className="max-w-7xl mx-auto px-6 py-24 text-white">
      <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
        <h2 className="text-4xl font-bold">Health Insights</h2>
        <Link to="/blog" className="text-teal-400 hover:text-teal-300 font-medium whitespace-nowrap ml-4">View All →</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all shadow-xl group">
          <div className="overflow-hidden">
             <img src="/images/diabetes.png" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" alt="Diabetes"/>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-3">Prevent Diabetes</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Lifestyle tips and diet plans to manage blood sugar and prevent onset.
            </p>
            <Link to="/blog" className="text-teal-400 font-medium">Read Article</Link>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all shadow-xl group">
          <div className="overflow-hidden">
             <img src="/images/heart.png" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" alt="Heart"/>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-3">Heart Health</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Foods and habits that protect cardiovascular health and reduce risk.
            </p>
            <Link to="/blog" className="text-teal-400 font-medium">Read Article</Link>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all shadow-xl group">
          <div className="overflow-hidden">
             <img src="/images/lungs.png" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" alt="Lungs"/>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-3">Air Pollution Risk</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Understanding PM2.5 and its long-term health impacts on parameters.
            </p>
            <Link to="/blog" className="text-teal-400 font-medium">Read Article</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
