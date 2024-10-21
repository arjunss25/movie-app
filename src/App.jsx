import React from 'react'
import Navbar from './Navbar'
import Popularmovies from './Popularmovies'
import Latestmovies from './Latestmovies'
import Comedymovies from './Comedymovies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path='/popularmovies' element={<Popularmovies/>}/>
          <Route path='/latestmovies' element={<Latestmovies/>}/>
          <Route path='/comedymovies' element={<Comedymovies/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App