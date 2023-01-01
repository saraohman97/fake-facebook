import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        {/* birthday friends */}
        <div className="birthday-container">
          <img src="/assets/birth.png" alt="birthday cake" className='birthday-img' />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>

        {/* adverticement */}
        <img src="assets/ad.webp" className='rightbar-ad' alt="ad colgate teeth" />

        {/* online friends */}
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">

          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}

        </ul>
      </div>
    </div>
  )
}

export default Rightbar