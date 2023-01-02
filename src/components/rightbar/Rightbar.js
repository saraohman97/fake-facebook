import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({ profile }) => {

  const HomeRightbar = () => {
    return (
      <>
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
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbar-title'>User Information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">New York</span>
          </div>

          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">Madrid</span>
          </div>

          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">Married</span>
          </div>
        </div>

        <h4 className="rightbar-title">User Friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img
              src="assets/person/person1.jpg"
              className='rightbar-following-img'
              alt=""
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>

          <div className="rightbar-following">
            <img
              src="assets/person/person2.jpg"
              className='rightbar-following-img'
              alt=""
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>

          <div className="rightbar-following">
            <img
              src="assets/person/person3.jpg"
              className='rightbar-following-img'
              alt=""
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>

          <div className="rightbar-following">
            <img
              src="assets/person/person4.jpg"
              className='rightbar-following-img'
              alt=""
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>

          <div className="rightbar-following">
            <img
              src="assets/person/person5.jpg"
              className='rightbar-following-img'
              alt=""
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>

          <div className="rightbar-following">
            <img
              src="assets/person/person7.jpg"
              className='rightbar-following-img'
              alt=""
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar