import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Home'
import Form from './assets/Form'
import Nav from './assets/Nav'


function App() {


  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
