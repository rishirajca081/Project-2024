import { Home } from 'lucide-react'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import UserProfile from './Pages/UserProfile'
import ClientHomepage from './Pages/ClientHomepage'
const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route index element={<Home/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/Register" element={<Register/>}/>
  <Route path="/UserProfile" element={<UserProfile/>}/>
  <Route path="/ClientHomepage" element={<ClientHomepage/>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
