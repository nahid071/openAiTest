import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const user = "d"
  return (
    <div
      className="d-flex justify-content-between p-2"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="logo">
        <Link to="/">Note App</Link>
      </div>
      <div className="d-flex">
        {user ? (
          <>
            <div className="pe-3">
              <Link to="/dashboard">My Notes</Link>
            </div>
            <div className="pe-3">
              <Link to="/profile">Profile</Link>
            </div>
            <div className="pe-3">
              <Link to="/">Log Out</Link>
            </div>
          </>
        ) : (
          <>
            <div className="pe-3">
              <Link to="/login">Log In</Link>
            </div>
            <div>
              <Link to="/register">Register</Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
