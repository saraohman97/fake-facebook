import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className='post'>
        <div className="post-wrapper">

            <div className="post-top">
                <div className="post-top-left">
                    <img src="/assets/person/pexels-andrea-piacquadio-774909.jpg" alt="woman user" className='post-profile-img' />
                    <span className="post-user-name">Safak Kdj</span>
                    <span className="post-date">5 min ago</span>
                </div>
                <div className="post-top-right">
                <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>

            <div className="post-center">
                <span className="post-text">Hey! Its my first post! :)</span>
                <img src="assets/post/pexels-afta-putta-gunawan-1036804.jpg" alt="" className='post-img' />
            </div>

            <div className="post-bottom">
                <div className="post-bottom-left">
                <i className="fas fa-thumbs-up"></i>
                <i className="fas fa-heart"></i>
                <span className="post-like-counter">32 people liked it</span>
                </div>

                <div className="post-bottom-right">
                    <div className="post-comment-text">9 comments</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Post
