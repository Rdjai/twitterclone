import React, { useEffect } from 'react'
import Navbar from './Navbaar'
import TweetCard from './TweetCard'
import TweetPost from './posttweet'

import { Alltweet } from '../services/apiService'; // Assuming you have an API service to fetch tweets


const MainContent = () => {

    const data = async () => {
        try {
            const res = await Alltweet();
            console.log("All Tweets:", res);
            return res.tweets;
        } catch (error) {
            console.error("Error fetching tweets:", error);
            return [];
        }
    }

    useEffect(() => {

        data();

    }, []);
    return (
        <div className='m-0 p-0 mt-3 w-full overflow-scroll overflow-y-scroll h-screen scrollbar-hide'>
            <Navbar />
            <TweetPost />
            <div className="min-h-screen bg-gray-100 dark:bg-black py-6 px-4">


            </div>
        </div>
    )
}

export default MainContent
