export default function Stats(){
  return(
    <section className="bg-white text-gray-800 py-24 shadow-2xl relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
        <div>
          <h2 className="text-5xl font-bold text-teal-600 mb-2">50%+</h2>
          <p className="font-medium text-gray-600 uppercase tracking-wide">Early Risk Detection</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-blue-600 mb-2">4000+</h2>
          <p className="font-medium text-gray-600 uppercase tracking-wide">Health Records Analyzed</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-green-600 mb-2">95%</h2>
          <p className="font-medium text-gray-600 uppercase tracking-wide">Model Accuracy</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-purple-600 mb-2">24/7</h2>
          <p className="font-medium text-gray-600 uppercase tracking-wide">AI Monitoring</p>
        </div>
      </div>
    </section>
  )
}
