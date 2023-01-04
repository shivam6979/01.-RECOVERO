import React from 'react'

import './Login.css'

const Login = () => {
  return (
    <div className='all'>
    <h1>SignUp to continue</h1>
    <div className="form">
      <div className="form-body">
          <div className="email">
              <label className="form__label" for="email">Email </label>
              <input  type="email" id="email" className="form__input" placeholder="Email"/>
          </div>
          <div className="password">
              <label className="form__label" for="password">Password </label>
              <input className="form__input" type="password"  id="password" placeholder="Password"/>
          </div>
      </div>
      <div className="footer">
          <button type="submit" className="btn1">Login</button>
      </div>
  </div>
  </div>
  )
}

export default Login
