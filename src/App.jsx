import {useState,useEffect} from 'react'
import "./styles.css"
import Navbar from './components/Navbar'
import SearchRecipe from './components/SearchRecipe'

function App(){

  return (
    <>
    <Navbar/>
    <SearchRecipe/>
    </>
  )


}

export default App