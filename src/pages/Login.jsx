import { Link } from "react-router-dom";
import "./login.scss"
import React from 'react'

function Login() {
  return (
    <div className="login">
      <div className="card">
      <div className="left">
        <h1>Jai MataDi.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis voluptas qui crepudiandae.
        </p>
        <span>Don't have an account?</span>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
      <div className="right">
        <h1>login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>login</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login;