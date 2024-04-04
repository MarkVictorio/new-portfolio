import Navbar from "./components/topbar"
import Home from "./components/Home"
import Projects from "./components/Projects"

function App() {

  return (
    <>
      <div className="bg-[#282f37] h-full">
        <Navbar />
        <Home/>
        <Projects/>
      </div> 
     
    </>
  )
}

export default App
