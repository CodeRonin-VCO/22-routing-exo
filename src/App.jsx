import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './routes/home.route'
import AboutPage from './routes/about.route'
import DestinationsList from './routes/destinations/destinations-list/destinations-list.route'
import DestinationDetails from './routes/destinations/destinations-list/destinations-details.route'
import NavBar from './features/nav-bar/nav-bar'
import { useState } from 'react'
import NotFound from './components/not-found/not-found'

function App() {

    return (
        <>
            <NavBar />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='destination'>
                    <Route index element={<DestinationsList />} />
                    <Route path=":id" element={<DestinationDetails />} />
                </Route>
                <Route path='/not-found' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App;
