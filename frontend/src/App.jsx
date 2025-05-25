import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserLayout from './components/Layout/UserLayout';
import { Toaster } from "sonner";


const App = () => {
  
  return (
    <>
      <Router>
        <Toaster position="top-center"/>
        <Routes>
          <Route path='/' element={<UserLayout />} >
            {/* User Layout */}
            <Route index element={<Home />}/>
          </Route>
          {/* --- */}
          <Route>
            {/* Admin Layout */}
          </Route>
        </Routes>

        {/* these are for vercel for chaking speed and insights */}
        <SpeedInsights />
        <Analytics />
      </Router>



    </>
  )
}

export default App