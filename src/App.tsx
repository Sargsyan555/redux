
import './App.css'
import { Admin } from './pages/admin';
import { CurrentProduct } from './pages/currentProduct';
import { ProductPage } from './pages/home';
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/products/:id" element={<CurrentProduct />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
