import React from 'react'
import Navbar from './Navbaar'
import TweetComponent from './tweetcomponent'
import TweetPost from './posttweet'


const MainContent = () => {
    return (
        <div className='MainContent'>
            <Navbar />
            <TweetPost />
            <TweetComponent />
        </div>
    )
}

export default MainContent
