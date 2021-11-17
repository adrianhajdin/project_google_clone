import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Results from './Results'

const Routing = () => {
  return (
    <div className="p-4" >
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />} />
        <Route exact path="/search" element={<Results/>} />
        <Route path="/images" element={<Results/>} />
        <Route path="/news" element={<Results/>} />
        <Route path="/videos" element={<Results/>} />
      </Routes> 
    </div>
  )
}

export default Routing

