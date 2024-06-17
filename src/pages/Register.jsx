import "./register.scss"
import React from 'react'
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="card">
      <div className="left">
        <h1>Jai MataDi.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis voluptas qui crepudiandae.
        </p>
        <span>Do you have an account?</span>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <button>login</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register;