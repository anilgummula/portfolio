import { Toaster } from "react-hot-toast"
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"

const App = () => {
  return (
    <>
        <div>
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Contact/>
        <Footer/>
        </div>
        <Toaster/>
        {/* position="top-center"
        reverseOrder={false} */}
    </>
  )
}

export default App