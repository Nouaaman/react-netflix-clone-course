import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App