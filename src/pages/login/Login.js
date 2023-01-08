import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className="login-wrapper">
            <div className="login-left">
                <h3 className="login-logo">Lamasocial</h3>
                <span className="login-desc">Connect your friends and the world <br /> around you on Lamasocial</span>
            </div>

            <div className="login-right">
                <div className="login-box">
                    <input placeholder='Email' className='login-input' />
                    <input placeholder='Password' className='login-input' />
                    <button className='login-button'>Log in</button>
                    <span className="login-forgot">Forgot password?</span>
                    <button className='login-register-button'>Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login