import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[10vh] flex items-center justify-between px-10 overflow-hidden'>
        <div className="logo">
            <img src="src/assets/logo.png" alt="logo" className='w-[5rem]'/>
        </div>

        <div className="navlinks flex items-center gap-10 text-[1rem]">
            <a href=""><Link to={"/popularmovies"}>Popular Movies</Link></a>
            <a href=""><Link to={"/latestmovies"}>Latest Movies</Link></a>
            <a href=""><Link to={"/comedymovies"}>Comedy Movies</Link></a>
        </div>
    </div>
  )
}

export default Navbar