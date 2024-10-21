import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux_toolkit/Exampleslice';


const Popularmovies = () => {

  const {value} = useSelector((state) => state.test)
  const dispatch = useDispatch()
 


  return (
    <div className='flex gap-10 flex-col'>
        
        <h1>{value}</h1>
        <button className='bg-green-200' onClick={() => dispatch(increment())}>increment</button>
        <button className='bg-red-200' onClick={() => dispatch(decrement())}>decrement</button>
       
    </div>
  )
}

export default Popularmovies