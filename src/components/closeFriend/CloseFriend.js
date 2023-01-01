import React from 'react'
import './closeFriend.css'

const CloseFriend = ({user}) => {
  return (
    <li className="sidebar-frind">
    <img src={user.profilePicture} alt="woman" className="sidebar-friend-img" />
    <span className="sidebar-friend-name">{user.username}</span>
  </li>
  )
}

export default CloseFriend