import './scss/global.scss'
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import Nav from './components/Nav'


function App() {

  const [active, setActive] = useState('Home')

  return (
    <>
      <BrowserRouter>
        <Nav active={active} setActive={setActive}></Nav>
        <Routes>
        <Route path='/' element={<Home active={active} setActive={setActive} />}/>
        <Route path='/form' element={<Form active={active} setActive={setActive} />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
