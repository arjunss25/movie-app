import { configureStore } from '@reduxjs/toolkit'
import  ExamplesliceReducer   from './Exampleslice'


export const store = configureStore({
  reducer: {
    test: ExamplesliceReducer 
  },
})