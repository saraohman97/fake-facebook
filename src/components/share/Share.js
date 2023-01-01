import React from 'react'
import './share.css'

const Share = () => {
    return (
        <div className='share'>
            <div className="share-wrapper">
                <div className="share-top">
                    <img src="/assets/person/person1.jpg" alt="" className='share-profile-img' />
                    <input
                        className='share-input'
                        placeholder='What´s on your mind, Shafak?'
                    />
                </div>

                <hr className="share-hr" />
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <i className="fas fa-photo-video"></i>
                            <span className='share-option-text'>Photo or Video</span>
                        </div>

                        <div className="share-option">
                            <i className="fas fa-tag"></i>
                            <span className='share-option-text'>Tag</span>
                        </div>

                        <div className="share-option">
                            <i className="fas fa-map-marker-alt"></i>
                            <span className='share-option-text'>Location</span>
                        </div>

                        <div className="share-option">
                            <i className="fas fa-grin-beam"></i>
                            <span className='share-option-text'>Feelings</span>
                        </div>
                    </div>
                    <button className="share-button">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share