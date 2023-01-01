import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">

          <li className="sidebar-list-item">
            <i className="fas fa-rss"></i>
            <span className="sidebar-list-item-text">Feed</span>
          </li>

          <li className="sidebar-list-item">
            <i className="fas fa-comment-dots"></i>
            <span className="sidebar-list-item-text">Chats</span>
          </li>

          <li className="sidebar-list-item">
            <i className="fas fa-play-circle"></i>
            <span className="sidebar-list-item-text">Videos</span>
          </li>

          <li className="sidebar-list-item">
            <i className="fas fa-bookmark"></i>
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>

          <li className="sidebar-list-item">
            <i className="far fa-question-circle"></i>
            <span className="sidebar-list-item-text">Questions</span>
          </li>

          <li className="sidebar-list-item">
            <i className="fas fa-briefcase"></i>
            <span className="sidebar-list-item-text">Jobs</span>
          </li>

          <li className="sidebar-list-item">
            <i className="fas fa-calendar-day"></i>
            <span className="sidebar-list-item-text">Events</span>
          </li>

          <li className="sidebar-list-item">
            <i className="fas fa-graduation-cap"></i>
            <span className="sidebar-list-item-text">Courses</span>
          </li>

        </ul>
        <button className="sidebar-button">Show More</button>
        <hr className='sidebar-hr' />


        <ul className="sidebar-friend-list">
          <li className="sidebar-frind">
            <img src="/assets/person/pexels-lukas-rychvalsky-670720.jpg" alt="woman" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-frind">
            <img src="/assets/person/pexels-lukas-rychvalsky-670720.jpg" alt="woman" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-frind">
            <img src="/assets/person/pexels-lukas-rychvalsky-670720.jpg" alt="woman" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-frind">
            <img src="/assets/person/pexels-lukas-rychvalsky-670720.jpg" alt="woman" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-frind">
            <img src="/assets/person/pexels-lukas-rychvalsky-670720.jpg" alt="woman" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-frind">
            <img src="/assets/person/pexels-lukas-rychvalsky-670720.jpg" alt="woman" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-frind">
            <img src="/assets/person/pexels-lukas-rychvalsky-670720.jpg" alt="woman" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-frind">
            <img src="/assets/person/pexels-lukas-rychvalsky-670720.jpg" alt="woman" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-frind">
            <img src="/assets/person/pexels-lukas-rychvalsky-670720.jpg" alt="woman" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-frind">
            <img src="/assets/person/pexels-lukas-rychvalsky-670720.jpg" alt="woman" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar