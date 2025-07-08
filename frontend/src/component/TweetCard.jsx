import React from 'react';
import { likePost } from '../services/apiService';
const TweetCard = ({ key, name, username, avatar, content, image, time }) => {
    const likepost = async () => {
        try {
            const res = await likePost(key);
            console.log("Fetched Tweets:", res);
            if (res && res.alltweets) {
                setAlltweet(res.alltweets);
            } else {
                console.error("Invalid response format:", res);
            }
        } catch (error) {
            console.error("Error in likepost:", error);
        }
    }
    return (
        <div className="bg-white dark:bg-black text-gray-900 dark:text-white p-4 border-b border-gray-200 dark:border-gray-700 max-full w-full mx-auto">
            <div className="flex gap-4">
                {/* Avatar */}
                <img
                    src={avatar}
                    alt={`${name}'s avatar`}
                    className="w-12 h-12 rounded-full object-cover"
                />

                {/* Main content */}
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <span className="font-bold">{name}</span>
                        <span className="text-gray-500">@{username}</span>
                        {time && <span className="text-gray-500">· {time}</span>}
                    </div>

                    {/* Tweet text */}
                    <p className="mt-1">{content}</p>

                    {/* Tweet image (if any) */}
                    {image && (
                        <div className="mt-3">
                            <img
                                src={image}
                                alt="Tweet media"
                                className="rounded-lg max-h-96 w-full object-cover"
                            />
                        </div>
                    )}

                    {/* Optional Actions */}
                    <div className="mt-3 flex gap-6 text-gray-500 text-sm">
                        <button className="hover:text-blue-500">Reply</button>
                        <button className="hover:text-green-500">Retweet</button>
                        <button className="hover:text-pink-500" onClick={likepost()}>Like</button>
                        <button className="hover:text-gray-400">Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TweetCard;
