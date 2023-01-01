import React from 'react'
import './online.css'

const Online = ({user}) => {
    return (
        <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
                <img src={user.profilePicture} className='rightbar-profile-img' alt="" />
                <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">{user.username}</span>
        </li>
    )
}

export default Online