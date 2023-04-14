import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { Page } from '../page'
import { Home } from '../pages/Home'
import { Asterioid } from '../components/asteroid'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route path='/' element={<Home />}/>
          <Route path='/asteroid' element={<Asterioid />}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}