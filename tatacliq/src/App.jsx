import { Route, Routes } from "react-router-dom"
import Profile from "./pages/Profile"
import { AuthProvider } from "./authContext/AuthProvider "
// import { Register } from "./pages/Register"
import FetchData from "./pages/FetchData"
// import { LoginPage } from "./pages/LoginPage "
// import AddToCart from "./pages/AddToCart "
// import Electronics from "./pages/Electronics "
// import SinglePage from "./pages/SinglePage "
// import MenClothing from "./pages/MenClothing "
import PageNotFound from "./pages/PageNotFound "
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar"
// import Payment from "./pages/Payment "

const App = () => {

  return (
    <div>
      <Routes>
        <Navbar />
        <AuthProvider>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/data" element={<FetchData />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/electronics/:id" element={<SinglePage />} />
          <Route path="/menclothing" element={<MenClothing />} />
          <Route path="/menclothing/:id" element={<SinglePage />} />
          <Route path="/data/:id" element={<SinglePage />} >
          </Route> */}

          {/* <Route path="/data/:id/payment/:payId" element={<Payment />} /> */}
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}

        </AuthProvider>
      </Routes>
      
    </div>
  )
}

export default App
