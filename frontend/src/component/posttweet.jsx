import React, { useState } from 'react';
import { Image, ImagePlay, List, SmilePlus } from 'lucide-react';

const PostTweet = () => {
    const [tweet, setTweet] = useState('');

    const handlePost = () => {
        if (tweet.trim() === '') return;
        console.log('Tweet posted:', tweet);
        setTweet('');
    };

    return (
        <div className="bg-back flex border-t border-b  m-0 p-4 items-start w-full text-white">
            {/* Profile Image */}
            <div className="mr-3">
                <img
                    src="https://pbs.twimg.com/profile_images/1834111746761777152/AnOcYg2N_400x400.jpg"
                    alt="Profile"
                    className="h-[50px] w-[50px] rounded-full object-cover"
                />
            </div>

            {/* Tweet Content Area */}
            <div className="flex-1">
                <textarea
                    value={tweet}
                    onChange={(e) => setTweet(e.target.value)}
                    className="w-full h-[100px] bg-transparent text-white outline-none p-2 text-lg resize-none placeholder:text-gray-500"
                    placeholder="What's happening?"
                ></textarea>

                {/* Toolbar and Post Button */}
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-4">
                        {/* Image Icon */}
                        <div className="relative group inline-block">
                            <Image
                                className="h-[20px] w-[20px] text-sky-500 cursor-pointer"
                            />
                            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-600 rounded opacity-0 group-hover:opacity-100 transition z-10">
                                Image
                            </span>
                        </div>

                        {/* Video Icon */}
                        <div className="relative group inline-block">
                            <ImagePlay className="h-[20px] w-[20px] text-sky-500 cursor-pointer" />
                            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-600 rounded opacity-0 group-hover:opacity-100 transition z-10">
                                Video
                            </span>
                        </div>

                        {/* Poll Icon */}
                        <div className="relative group inline-block">
                            <List className="h-[20px] w-[20px] text-sky-500 cursor-pointer" />
                            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-600 rounded opacity-0 group-hover:opacity-100 transition z-10">
                                Poll
                            </span>
                        </div>

                        {/* GIF Icon */}
                        <div className="relative group inline-block">

                            <SmilePlus className="h-[20px] w-[20px] text-sky-500 cursor-pointer" />

                            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-600 rounded opacity-0 group-hover:opacity-100 transition z-10">
                                Emoji
                            </span>
                        </div>

                        {/* Emoji Icon */}
                        {/* <div className="relative group inline-block">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1384/1384062.png"
                                alt="Emoji Icon"
                                className="h-[20px] w-[20px] cursor-pointer"
                            />
                            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-600 rounded opacity-0 group-hover:opacity-100 transition z-10">
                                Emoji
                            </span>
                        </div> */}
                    </div>

                    {/* Post Button */}
                    <button
                        onClick={handlePost}
                        disabled={tweet.trim() === ''}
                        className={`px-4 py-2 rounded-full text-white font-semibold transition ${tweet.trim()
                            ? 'bg-sky-500 hover:bg-sky-600'
                            : 'bg-gray-400 cursor-not-allowed'
                            }`}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostTweet;
