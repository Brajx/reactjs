import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import CustomerRegistration from './components/CustomerRegstration'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'
import CustomerList from './components/CustomerList'

function App() {

  return (
    <>
    
    <BrowserRouter>
      <Routes>
                     {/* http://localhost:8080/customer-register */}
        <Route path='/customer_register' element = { <CustomerRegistration/>}></Route>

                     {/* http://localhost:8080/login */}
        <Route path='/login' element = { <LoginComponent/>}></Route>

                      {/* http://localhost:8080/register */}
        <Route path='/register' element={<RegisterComponent/>}></Route>

        <Route path='/customer_list' element={<CustomerList/>}></Route>

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
