import React, { useState } from 'react'
import './post.css'
import { Users } from '../../dummyData'

const Post = ({ post }) => {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const handleLike = () => {
        setLike(isLiked ? like -1 : like +1)
        setIsLiked(!isLiked)
    }

    return (
        <div className='post'>
            <div className="post-wrapper">

                <div className="post-top">
                    <div className="post-top-left">
                        <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="woman user" className='post-profile-img' />
                        <span className="post-user-name">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="post-date">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                </div>

                <div className="post-center">
                    <span className="post-text">{post?.desc}</span>
                    <img src={post.photo} alt="" className='post-img' />
                </div>

                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <i className="fas fa-thumbs-up" onClick={handleLike}></i>
                        <i className="fas fa-heart" onClick={handleLike}></i>
                        <span className="post-like-counter">{like} people liked it</span>
                    </div>

                    <div className="post-bottom-right">
                        <div className="post-comment-text">{post.comment} comments</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post
