import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <h2>🏠 Home Page</h2>
    <p><Link to="/login">Login</Link> to access the dashboard.</p>
  </div>
  )
}

export default Home