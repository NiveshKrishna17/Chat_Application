import { Fragment } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Chat, Home } from './Pages'

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </Fragment>
  )
}

export default App
