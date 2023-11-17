import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Sertificates from "./pages/Certificates"
import About from "./pages/About/About"
import Catalog from "./pages//Catalog/Catalog"
import Articles from "./pages/Articles/Articles"
import Delivery from "./pages/Delivery/Delivery"
import Login from "./pages/Login/Lognup"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<App/>} />
       <Route path='/Certificates'element={<Sertificates/>} />
       <Route path='/About'element={<About/>} />
       <Route path='/Catalog'element={<Catalog/>} />
       <Route path='/Articles'element={<Articles/>} />
       <Route path='/Delivery'element={<Delivery/>} />
       <Route path='/Lognup'element={<Login/>} />
       <Route path="*" element={<h1></h1>} />
       
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

