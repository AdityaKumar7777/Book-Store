import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import DeleteBooks from '../pages/DeleteBooks'
import EditBooks from '../pages/EditBooks'
import ShowBook from '../pages/ShowBook'
import CreateBooks from '../pages/CreateBooks'


const App = () => {
  return (
    <Routes>
      < Route path='/' element={<Home/>}/>
      < Route path='/books/create' element={<CreateBooks/>}/>
      < Route path='/books/details/:id' element={<ShowBook/>}/>
      < Route path='/books/edit/:id' element={<EditBooks/>}/>
      < Route path='/books/delete/:id' element={<DeleteBooks/>}/>
    </Routes>
  )
}

export default App