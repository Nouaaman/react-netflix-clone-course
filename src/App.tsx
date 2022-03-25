import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Landing from "./pages/Landing/Landing";
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import TVShows from './pages/TVShows/TVShows'
import Movies from './pages/Movies/Movies'
import Latest from './pages/Latest/Latest'
import Login from './pages/Login/Login'
import NavBar from './components/layout/NavBar/NavBar'
import Footer from './components/layout/Footer/Footer'
import UserContext from "./context/user/UserContext";
import Details from './components/Details/Details'
import Profiles from "./pages/Profiles/Profiles";

function App() {

    const { isConnected } = React.useContext(UserContext)

    return (

        <BrowserRouter>
            {isConnected && <Details />}
            <NavBar />
            <Routes>
                {/* redirect to landing page if not connected */}
                {isConnected ?
                    <>
                        <Route index element={<Home />}></Route>
                        <Route path='home' element={<Home />}></Route>
                        <Route path='TVShows' element={<TVShows />}></Route>
                        <Route path='movies' element={<Movies />}></Route>
                        <Route path='latest' element={<Latest />}></Route>

                        <Route path="Profiles" element={<Profiles />}></Route>

                    </> :
                    <>
                        <Route index element={<Landing />}></Route>
                        <Route path='home' element={<Landing />}></Route>
                        <Route path="login" element={<Login />}></Route>
                    </>
                }

                <Route path="*" element={<NotFound />} ></Route>
            </Routes>
            <Footer />
        </BrowserRouter >
    )
}
export default App