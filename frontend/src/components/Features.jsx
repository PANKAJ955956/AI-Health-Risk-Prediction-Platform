import { Activity, HeartPulse, BarChart3, Wind } from "lucide-react"

export default function Features(){
  return(
    <section className="max-w-7xl mx-auto px-6 py-24 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Comprehensive Diagnostics</h2>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all">
          <Activity size={40} className="text-teal-400"/>
          <h3 className="mt-6 text-xl font-semibold">Disease Prediction</h3>
          <p className="text-gray-300 mt-3 leading-relaxed">
            AI predicts diabetes, heart disease and lung complications instantly.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all">
          <BarChart3 size={40} className="text-teal-400"/>
          <h3 className="mt-6 text-xl font-semibold">Analytics Dashboard</h3>
          <p className="text-gray-300 mt-3 leading-relaxed">
            Visualize your health metrics using comprehensive data analytics.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all">
          <HeartPulse size={40} className="text-teal-400"/>
          <h3 className="mt-6 text-xl font-semibold">Risk Monitoring</h3>
          <p className="text-gray-300 mt-3 leading-relaxed">
            Continuous AI monitoring of your critical health parameters.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all">
          <Wind size={40} className="text-teal-400"/>
          <h3 className="mt-6 text-xl font-semibold">Pollution Risk</h3>
          <p className="text-gray-300 mt-3 leading-relaxed">
            Assess respiratory risk based on local PM2.5 exposure levels.
          </p>
        </div>
      </div>
    </section>
  )
}
