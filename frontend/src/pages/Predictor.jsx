import { useState } from 'react'
import { Activity } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Predictor() {
  const [formData, setFormData] = useState({
    age: '',
    bmi: '',
    blood_pressure: '',
    glucose: '',
    cholesterol: '',
    pm25: '',
    smoking_years: '',
    pregnancies: 0,
    sex: 1,
    chest_pain: 0
  })

  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      const payload = {
        age: Number(formData.age),
        bmi: Number(formData.bmi),
        blood_pressure: Number(formData.blood_pressure),
        glucose: Number(formData.glucose),
        cholesterol: Number(formData.cholesterol),
        pm25: Number(formData.pm25),
        smoking_years: Number(formData.smoking_years),
        pregnancies: Number(formData.pregnancies),
        sex: Number(formData.sex),
        chest_pain: Number(formData.chest_pain)
      }

      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!response.ok) throw new Error('Failed to fetch prediction')

      const data = await response.json()
      setResults(data)
    } catch (err) {
      setError("Failed to connect to the backend API. Make sure Flask is running.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div 
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6}}
      className="w-full max-w-4xl mx-auto px-6 py-12"
    >
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl mb-6 shadow-xl">
          <Activity className="h-10 w-10 text-purple-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Health Risk Predictor</h1>
        <p className="text-gray-300 text-lg">Enter your physical metrics to get a comprehensive machine learning risk assessment.</p>
      </header>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Age</label>
              <input type="number" name="age" required value={formData.age} onChange={handleInputChange} className="w-full bg-black/20 border border-white/10 p-3.5 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/5 transition-all shadow-inner" placeholder="e.g. 45" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">BMI</label>
              <input type="number" step="0.1" name="bmi" required value={formData.bmi} onChange={handleInputChange} className="w-full bg-black/20 border border-white/10 p-3.5 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/5 transition-all shadow-inner" placeholder="e.g. 28.5" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Blood Pressure (Systolic)</label>
              <input type="number" name="blood_pressure" required value={formData.blood_pressure} onChange={handleInputChange} className="w-full bg-black/20 border border-white/10 p-3.5 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/5 transition-all shadow-inner" placeholder="e.g. 130" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Glucose Level</label>
              <input type="number" name="glucose" required value={formData.glucose} onChange={handleInputChange} className="w-full bg-black/20 border border-white/10 p-3.5 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/5 transition-all shadow-inner" placeholder="e.g. 160" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Cholesterol</label>
              <input type="number" name="cholesterol" required value={formData.cholesterol} onChange={handleInputChange} className="w-full bg-black/20 border border-white/10 p-3.5 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/5 transition-all shadow-inner" placeholder="e.g. 200" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Sex</label>
              <select name="sex" value={formData.sex} onChange={handleInputChange} className="w-full bg-black/20 border border-white/10 p-3.5 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/5 transition-all shadow-inner">
                <option value={1} className="bg-slate-900">Male</option>
                <option value={0} className="bg-slate-900">Female</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Smoking History (Years)</label>
              <input type="number" name="smoking_years" required value={formData.smoking_years} onChange={handleInputChange} className="w-full bg-black/20 border border-white/10 p-3.5 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/5 transition-all shadow-inner" placeholder="e.g. 5" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Average PM2.5 Exposure</label>
              <input type="number" name="pm25" required value={formData.pm25} onChange={handleInputChange} className="w-full bg-black/20 border border-white/10 p-3.5 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/5 transition-all shadow-inner" placeholder="e.g. 50" />
            </div>
          </div>

          <motion.button 
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all text-lg" 
            disabled={loading}
          >
            {loading ? 'Running AI Inference Models...' : 'Start Health Assessment'}
          </motion.button>
        </form>

        {error && <div className="text-red-300 mt-6 text-center font-medium bg-red-500/20 p-4 rounded-xl border border-red-500/30">{error}</div>}
      </div>

      {results && (
        <motion.div 
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="mt-16"
        >
          <h2 className="text-center text-3xl font-bold mb-10 text-white">AI Diagnosis Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div whileHover={{y: -5}} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <span className="font-bold text-xl text-white">🩸 Diabetes</span>
                <span className={`px-4 py-1.5 text-xs font-bold uppercase rounded-full border ${results.diabetes_risk === 1 ? 'bg-red-500/20 text-red-300 border-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]'}`}>
                  {results.diabetes_risk === 1 ? 'High Risk' : 'Low Risk'}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {results.diabetes_recommendation}
              </p>
            </motion.div>

            <motion.div whileHover={{y: -5}} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <span className="font-bold text-xl text-white">🫀 Heart Disease</span>
                <span className={`px-4 py-1.5 text-xs font-bold uppercase rounded-full border ${results.heart_risk === 1 ? 'bg-red-500/20 text-red-300 border-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]'}`}>
                  {results.heart_risk === 1 ? 'High Risk' : 'Low Risk'}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {results.heart_recommendation}
              </p>
            </motion.div>

            <motion.div whileHover={{y: -5}} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <span className="font-bold text-xl text-white">🫁 Lung Risk</span>
                <span className={`px-4 py-1.5 text-xs font-bold uppercase rounded-full border ${results.lung_risk === 1 ? 'bg-red-500/20 text-red-300 border-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]'}`}>
                  {results.lung_risk === 1 ? 'High Risk' : 'Low Risk'}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {results.lung_recommendation}
              </p>
            </motion.div>

          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
