import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Predictor from "./pages/Predictor"
import Dashboard from "./pages/Dashboard"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/predictor" element={<Predictor/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
