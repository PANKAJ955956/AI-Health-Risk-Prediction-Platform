export default function Contact(){
  return(
    <section className="bg-slate-900 border-t border-white/10 text-white py-24 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Stay in Touch</h2>
          <p className="text-lg text-gray-300 max-w-md leading-relaxed">
            Contact our leadership team to learn more about our AI models, request API access, or gain exclusive updates to our risk prediction platform.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl space-y-5 shadow-2xl">
          <div className="grid grid-cols-2 gap-5">
            <input placeholder="First Name" className="w-full p-4 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-teal-500 transition-colors" />
            <input placeholder="Last Name" className="w-full p-4 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-teal-500 transition-colors" />
          </div>
          <input placeholder="Email Address" className="w-full p-4 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-teal-500 transition-colors" />
          <textarea rows="4" placeholder="How can we help?" className="w-full p-4 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-teal-500 transition-colors resize-none" />
          <button className="w-full py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(13,148,136,0.4)] transition-colors text-lg">
            Send Message
          </button>
        </div>
      </div>
    </section>
  )
}
