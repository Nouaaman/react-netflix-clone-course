import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { TmdbProvider } from "./context/tmdb/TmdbContext";
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import TVShows from './pages/TVShows/TVShows'
import Movies from './pages/Movies/Movies'
import Latest from './pages/Latest/Latest'
import MyList from './pages/MyList/MyList'
import NavBar from './components/layout/NavBar/NavBar'
import Footer from './components/layout/Footer/Footer'

function App() {
    return (
        <TmdbProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path='home' element={<Home />}></Route>
                    <Route path='TVShows' element={<TVShows />}></Route>
                    <Route path='movies' element={<Movies />}></Route>
                    <Route path='latest' element={<Latest />}></Route>
                    <Route path='mylist' element={<MyList />}></Route>
                    <Route path="*" element={<NotFound />} ></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </TmdbProvider>
    )
}
export default App