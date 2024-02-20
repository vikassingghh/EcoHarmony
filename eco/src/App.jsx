import {} from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./App.css"
import Home from './Pages/Home'
import Product from './Pages/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import ServiceP from './Pages/ServiceP'
import Avilable from './Pages/Avilable'
import Colab from './Pages/Colab'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/service" element={<ServiceP/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/resources" element={<Avilable/>}/>
        <Route path="/collab" element={<Colab/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
