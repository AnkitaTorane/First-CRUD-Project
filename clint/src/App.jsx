import { useState } from 'react'
import './App.css'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/'element={<User />}></Route>
      <Route path='/Create'element={<CreateUser />}></Route>
      <Route path='/Update/:id'element={<UpdateUser />}></Route>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
