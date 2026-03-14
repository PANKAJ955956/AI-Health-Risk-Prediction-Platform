import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children}){
  return(
    <div className="min-h-screen flex flex-col font-inter bg-transparent text-white">
      <Navbar/>
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer/>
    </div>
  )
}
