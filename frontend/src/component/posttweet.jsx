import React, { useState, useRef, useEffect } from 'react';
import { Image, ImagePlay, List, SmilePlus } from 'lucide-react';
import { postTweet, getUserProfile } from '../services/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { addTweet } from '../redux/features/tweets/tweetSlice';
import { setUserInfo } from '../redux/features/userSlice';
const PostTweet = () => {
    const [tweet, setTweet] = useState('');
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();
    const { userinfo } = useSelector((state) => state.user);
    const handlePost = async () => {
        if (tweet.trim() === '' && !file) return;

        const formData = new FormData();
        formData.append('text', tweet);
        if (file) formData.append('media', file);

        try {
            const res = await postTweet(formData);
            console.log('✅ Tweet posted:', res);
            if (res && res.tweet) {
                dispatch(addTweet(res.tweet));
            }
            setTweet('');
            setFile(null);
        } catch (error) {
            console.error('❌ Error posting tweet:', error);
            alert("Failed to post");
        }
    };

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (selected) setFile(selected);
    };

    useEffect(() => {
        const userProfile = async () => {
            const userData = await getUserProfile();
            dispatch(setUserInfo(userData));

        }
        userProfile();
    }, [])

    console.log("User Profile: use selector", userinfo?.user[0].profilePic);
    return (
        <div className="bg-back flex border-t border-b m-0 p-4 items-start w-full text-white">
            {/* Profile Image */}
            <div className="mr-3">
                <img
                    src={userinfo && userinfo?.user[0] ? `http://localhost:8000/${userinfo?.user[0].profilePic}` : "/default-profile.png"}

                    alt="Profile"
                    className="h-[50px] w-[50px] rounded-full object-cover"
                />
            </div>

            {/* Tweet Content */}
            <div className="flex-1">
                <textarea
                    rows={5}
                    value={tweet}
                    onChange={(e) => setTweet(e.target.value)}
                    className="w-full h-[100px] bg-transparent text-white outline-none p-2 text-lg resize-none placeholder:text-gray-500"
                    placeholder="What's happening?"
                ></textarea>

                {/* File Preview */}
                {file && (
                    <div className="mt-2">
                        <p className="text-sm text-gray-400">📎 {file.name}</p>
                    </div>
                )}

                {/* Icons & Button */}
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-4">
                        {/* File Picker */}
                        <div className="relative group inline-block" onClick={() => fileInputRef.current.click()}>
                            <Image className="h-[20px] w-[20px] text-sky-500 cursor-pointer" />
                            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-600 rounded opacity-0 group-hover:opacity-100 transition z-10">
                                Image/Video
                            </span>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*,video/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </div>

                        <div className="relative group inline-block">
                            <List className="h-[20px] w-[20px] text-sky-500 cursor-pointer" />
                            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-600 rounded opacity-0 group-hover:opacity-100 transition z-10">
                                Poll
                            </span>
                        </div>

                        <div className="relative group inline-block">
                            <SmilePlus className="h-[20px] w-[20px] text-sky-500 cursor-pointer" />
                            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-600 rounded opacity-0 group-hover:opacity-100 transition z-10">
                                Emoji
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={handlePost}
                        disabled={tweet.trim() === '' && !file}
                        className={`px-4 py-2 rounded-full text-white font-semibold transition ${tweet.trim() || file
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
