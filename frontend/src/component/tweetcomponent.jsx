import React from 'react'
import logo from '../assets/logo.png'
import { ThumbsUpIcon, MessageCircle } from 'lucide-react'
const tweetcomponent = () => {
    return (
        <div className="tweet-card">
            <div className="tweetComponent">
                <img src="https://pbs.twimg.com/profile_images/1834111746761777152/AnOcYg2N_400x400.jpg" alt="" srcset="" height={35} />
                <div className="username">
                    <h5>Arun</h5>
                    <h5>@hiarun01</h5>

                </div>
                <h5>. 7h</h5>

            </div>
            <div className="tweet">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea exercitationem earum commodi perspiciatis ut, facilis nam quaerat rem ex iure magni perferendis eveniet aut eius modi iusto porro placeat nostrum?
            </div>
            <div className="tweet-btn-component">
                <div className="like-btn ">
                    <ThumbsUpIcon />
                </div>
                <div className="comment-btn ">
                    <MessageCircle />
                </div>
            </div>
        </div>
    )
}

export default tweetcomponent
