import FetchData from './pages/FetchData'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { LoginPage } from './pages/LoginPage'
import { Register } from './pages/Register'
import { AuthProvider } from './context/AuthProvider'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './pages/Profile'
import MenClothing from './pages/MenClothing'
import WomenClothing from './pages/WomenClothing'
import PageNotFound from './pages/PageNotFound'
import AddToCart from './pages/AddToCart'
import SinglePage from './pages/SinglePage'
import Electronics from './pages/Electronic'
import Love from './pages/Love'

const App = () => {
  return (
    <div>
      <Navbar />
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/data' element={<FetchData />} />
          <Route path='/data/:id' element={<SinglePage />} />
          <Route path='/menclothing' element={<MenClothing />} />
          <Route path='/womenclothing' element={<WomenClothing />} />
          <Route path='/electronic' element={<Electronics />} />
          <Route path='/addtocart' element={<AddToCart />} />
          <Route path='/love' element={<Love />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  )
}

export default App
