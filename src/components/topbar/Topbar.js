import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='topbar-container'>

      <div className="topbar-left">
        <Link to='/' style={{ textDecoration: 'none' }}><span className="topbar-logo">Lamasocial</span></Link>
      </div>

      <div className="topbar-center">
        <div className="searchbar">
          <i className="fas fa-search"></i>
          <input placeholder='Search for friend, post or video' className='search-input' />
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-link">Homepage</div>
        <div className="topbar-link">Timeline</div>

        <div className="topbar-icons">

          <div className="topbar-icon-item">
            <i className="fas fa-user"></i>
            <div className="topbar-icon-badge">1</div>
          </div>
          <div className="topbar-icon-item">
            <i className="far fa-comment-dots"></i>
            <div className="topbar-icon-badge">2</div>
          </div>
          <div className="topbar-icon-item">
            <i className="fas fa-bell"></i>
            <div className="topbar-icon-badge">1</div>
          </div>
        </div>

        <img src="/assets/person/person1.jpg" alt="user brunette" className='topbar-img' />
      </div>
    </div>
  )
}

export default Topbar