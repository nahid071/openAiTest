import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h1>Welcome to Note App</h1>

      <div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  )
}

export default Home
