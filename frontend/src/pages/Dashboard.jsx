import { PieChart, Pie, Tooltip, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dashboard() {
  const pieData = [
    { name: "Diabetes", value: 72, color: "#a855f7" },
    { name: "Heart", value: 55, color: "#3b82f6" },
    { name: "Lung", value: 20, color: "#10b981" },
  ];

  const barData = [
    { ageGroup: "20-30", diabetes: 15, heart: 5, lung: 10 },
    { ageGroup: "31-45", diabetes: 45, heart: 20, lung: 35 },
    { ageGroup: "46-60", diabetes: 70, heart: 60, lung: 50 },
    { ageGroup: "60+", diabetes: 85, heart: 80, lung: 75 },
  ];

  return (
    <motion.div 
      initial={{opacity: 0, scale: 0.95}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.6}}
      className="w-full max-w-7xl mx-auto px-6 py-12"
    >
      <header className="mb-12 text-center">
        <div className="inline-flex justify-center items-center bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl mb-4 text-purple-400 shadow-xl">
           <Activity className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Health Analytics Dashboard
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">Global trend visualizations tracking disease progression demographics across extensive datasets.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Pie Chart Card */}
        <motion.div whileHover={{scale: 1.02}} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-6">Population Risk Composition</h2>
          <div className="h-80 w-full flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={pieData} 
                  dataKey="value" 
                  nameKey="name" 
                  cx="50%" 
                  cy="50%" 
                  outerRadius={100} 
                  label={(entry) => `${entry.name} ${entry.value}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'rgba(30,41,59,0.8)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', color: '#fff' }} itemStyle={{ color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Bar Chart Card */}
        <motion.div whileHover={{scale: 1.02}} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-6">Risk Progression Target by Age</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                <XAxis dataKey="ageGroup" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(30,41,59,0.8)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', color: '#fff' }} itemStyle={{ color: '#fff' }} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                <Bar dataKey="diabetes" fill="#a855f7" name="Diabetes Risk %" radius={[4, 4, 0, 0]} />
                <Bar dataKey="heart" fill="#3b82f6" name="Heart Risk %" radius={[4, 4, 0, 0]} />
                <Bar dataKey="lung" fill="#10b981" name="Lung Risk %" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <motion.div 
        whileHover={{scale: 1.01}}
        className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full"></div>
        
        <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Where do you stand?</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg relative z-10">Generate your personalized clinical profile to compare your metrics against the baseline data collected from over 4000 individuals globally.</p>
        <Link to="/predictor" className="inline-block bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-xl text-white font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-1 relative z-10">Generate Individual Report</Link>
      </motion.div>
    </motion.div>
  );
}
