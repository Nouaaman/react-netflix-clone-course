import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'


import Landing from "./pages/Landing/Landing";
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import TVShows from './pages/TVShows/TVShows'
import Movies from './pages/Movies/Movies'
import Latest from './pages/Latest/Latest'
import MyList from './pages/MyList/MyList'
import NavBar from './components/layout/NavBar/NavBar'
import Footer from './components/layout/Footer/Footer'
import TmdbContext from "./context/tmdb/TmdbContext";

function App() {

    const { isConnected } = React.useContext(TmdbContext)

    return (

        <BrowserRouter>
            {isConnected ? <NavBar /> : null}{/* hide navbar in landing page */}
            <Routes>
                {/* redirect to landing page if not connected */}
                {isConnected ?
                    <>
                        <Route index element={<Home />}></Route>
                        <Route path='home' element={<Home />}></Route>

                    </> :
                    <>
                        <Route index element={<Landing />}></Route>
                        <Route path='home' element={<Landing />}></Route>
                    </>
                }
                <Route path='TVShows' element={<TVShows />}></Route>
                <Route path='movies' element={<Movies />}></Route>
                <Route path='latest' element={<Latest />}></Route>
                <Route path='mylist' element={<MyList />}></Route>
                <Route path="*" element={<NotFound />} ></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App