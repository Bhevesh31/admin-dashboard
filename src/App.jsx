import React from 'react'
import Home from './pages/home/Home'
import {  BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import { productInputs, userInputs } from './formSource'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
              <Route index element={<Home/>}/>
              <Route path='login' element={<Login/>} />
              <Route path='users'> 
                <Route index element={<List/>}/>
                <Route path=':userID' element={<Single/>} />
                <Route path = 'new' element={<New inputs={userInputs} title="Add New User"/>} />
              </Route>
              <Route path='products'> 
                <Route index element={<List/>}/>
                <Route path=':productID' element={<Single/>} />
                <Route path = 'new' element={<New inputs={productInputs} title="Add New Product"/>} />
              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
