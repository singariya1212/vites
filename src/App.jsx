import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Create from './components/Create'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
<Routes>
<Route exact path='/' element={<Create/>}/>
<Route  path='/read' element={<Read/>}/>
<Route  path='/update/:id' element={<Update/>}/>


</Routes>
    </>
  )
}

export default App
