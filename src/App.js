import Navbar from "./Navbar"
import AllWisdom from "./pages/AllWisdom"
import Home from "./pages/Home"
import About from "./pages/About"
import Custom from "./pages/Custom"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/wisdom" element={<AllWisdom />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  )
}

export default App
