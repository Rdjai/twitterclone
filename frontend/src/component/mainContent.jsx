import React, { useEffect } from 'react';
import Navbar from './Navbaar';
import TweetCard from './TweetCard';
import TweetPost from './posttweet';
import { Alltweet } from '../services/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { setTweets } from '../redux/features/tweets/tweetSlice';


const MainContent = () => {
    const dispatch = useDispatch();
    const alltweet = useSelector((state) => state.tweets);
    console.log("All tweets: main component", alltweet);

    const fetchTweets = async () => {
        try {
            const res = await Alltweet();
            dispatch(setTweets(res.alltweets));
        } catch (error) {
            console.error("Error fetching tweets:", error);
        }
    };

    useEffect(() => {
        fetchTweets();
    }, []);

    return (
        <div className='m-0 p-0 mt-3 w-full overflow-scroll overflow-y-scroll h-screen scrollbar-hide mb-3'>
            <Navbar />
            <TweetPost />
            <div className="min-h-screen bg-gray-100 dark:bg-black py-6 px-4">
                {alltweet.tweets.length > 0 ? (
                    alltweet.tweets.map((tweet, index) => (
                        <TweetCard
                            tweetId={tweet._id || index}
                            key={tweet._id || index}
                            name={tweet.author?.Name || "Unknown"}
                            username={tweet.author?.userName || "unknown"}
                            avatar={tweet.author?.profilePic ? `http://localhost:8000/${tweet.author.profilePic}` : "https://via.placeholder.com/150"}
                            content={tweet.text}
                            image={tweet.mediaUrl ? `http://localhost:8000${tweet.mediaUrl}` : null}
                            time={new Date(tweet.createdAt).toLocaleTimeString()}
                            like={Array.isArray(tweet.like) ? tweet.like.length : 0}

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
