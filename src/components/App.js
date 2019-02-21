import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => {
  return ( 
    <BrowserRouter>
      <div>
        <Link to="/">Navigate</Link>
        <Link to="/home">home</Link>
      </div>
    </BrowserRouter>
  )
}

export default App
