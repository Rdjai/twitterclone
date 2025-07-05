import React, { useEffect, useState } from 'react';
import Navbar from './Navbaar';
import TweetCard from './TweetCard';
import TweetPost from './posttweet';
import { Alltweet } from '../services/apiService';

const MainContent = () => {
    const [alltweet, setAlltweet] = useState([]);

    const Fetchdata = async () => {
        try {
            const res = await Alltweet();
            console.log("All Tweets:", res);
            // if (!res || !Array.isArray(res.data)) {
            //     throw new Error("Invalid response format");
            // }
            return res;
        } catch (error) {
            console.error("Error fetching tweets:", error);
            return [];
        }
    }

    useEffect(() => {
        const fetchTweets = async () => {
            const tweets = await Fetchdata();
            setAlltweet(tweets.alltweets);
        };
        fetchTweets(); // ✅ fixed this line
    }, []);
    console.log("All Tweets in MainContent:", alltweet);
    return (
        <div className='m-0 p-0 mt-3 w-full overflow-scroll overflow-y-scroll h-screen scrollbar-hide'>
            <Navbar />
            <TweetPost />
            <div className="min-h-screen bg-gray-100 dark:bg-black py-6 px-4">
                {alltweet.length > 0 ? (
                    alltweet.map((tweet, index) => (
                        <TweetCard
                            key={tweet._id || index}
                            name={tweet.author?.Name || "Unknown"}
                            username={tweet.author?.userName || "unknown"}
                            avatar={tweet.author?.profilePic || "https://via.placeholder.com/150"}
                            content={tweet.text}
                            image={`http://localhost:8000${tweet.mediaUrl}` || null}
                            time={new Date(tweet.createdAt).toLocaleTimeString()}
                        />
                    ))
                ) : (
                    <p className="text-white text-center">No tweets found.</p>
                )}
            </div>
        </div>
    );
};

export default MainContent;
