import React from 'react'

const PostTweet = () => {
    return (
        <div className="bg-back flex border-[1px]">
            <div className="profileimg">
                <img
                    src="https://pbs.twimg.com/profile_images/1834111746761777152/AnOcYg2N_400x400.jpg"
                    alt="Profile"
                    className="h-[50px] w-[50px] rounded-full object-cover profileicon"
                />
            </div>
            <div className="inputtext">
                <textarea
                    className="w-full h-[100px] bg-transparent text-white outline-none"
                    placeholder="What's happening?"
                ></textarea>
            </div>
        </div>
    )
}

export default PostTweet