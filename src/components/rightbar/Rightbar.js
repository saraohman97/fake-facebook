import React from 'react'
import './rightbar.css'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        {/* birthday friends */}
        <div className="birthday-container">
          <img src="/assets/4525667.png" alt="birthday cake" className='birthday-img' />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>

        {/* adverticement */}
        <img src="assets/ad.webp" className='rightbar-ad' alt="ad colgate teeth" />

        {/* online friends */}
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
              <img src="assets/person/pexels-pixabay-220453.jpg" className='rightbar-profile-img' alt="" />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">John Carter</span>
          </li>

          <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
              <img src="assets/person/pexels-pixabay-220453.jpg" className='rightbar-profile-img' alt="" />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">John Carter</span>
          </li>

          <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
              <img src="assets/person/pexels-pixabay-220453.jpg" className='rightbar-profile-img' alt="" />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">John Carter</span>
          </li>
          
          <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
              <img src="assets/person/pexels-pixabay-220453.jpg" className='rightbar-profile-img' alt="" />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar