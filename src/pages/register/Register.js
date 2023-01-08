import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className='login'>
        <div className="login-wrapper">
            <div className="login-left">
                <h3 className="login-logo">Lamasocial</h3>
                <span className="login-desc">Connect your friends and the world <br /> around you on Lamasocial</span>
            </div>

            <div className="login-right">
                <div className="login-box">
                    <input placeholder='Username' className='login-input' />
                    <input placeholder='Email' className='login-input' />
                    <input placeholder='Password' className='login-input' />
                    <input placeholder='Password again' className='login-input' />
                    <button className='login-button'>Sign up</button>
                    <button className='login-register-button'>Log into account</button>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Register