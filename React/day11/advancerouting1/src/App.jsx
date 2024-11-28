import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import PrivateRoutes from "./components/PrivateRoutes"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={
          <PrivateRoutes>
            <Products />
          </PrivateRoutes>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
