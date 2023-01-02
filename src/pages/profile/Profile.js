import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img
                                src="assets/post/post3.jpg"
                                className='profile-cover-img' alt=""
                            />
                            <img
                                src="assets/person/person7.jpg"
                                className='profile-user-img' alt=""
                            />
                        </div>
                        <div className="profile-info">
                            <h4 className='profile-info-name'>Safak djhbd</h4>
                            <span className='profile-info-desc'>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>

                    <div className="profile-right-bottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile