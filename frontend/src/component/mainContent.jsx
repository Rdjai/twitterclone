import React from 'react'
import Navbar from './Navbaar'
import TweetCard from './TweetCard'
import TweetPost from './posttweet'

const dummyTweets = [
    {
        name: "Anjali Singh",
        username: "anjalitechie",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        content: "modi ke aake koi bol skata modi ji  #modiJi #modi #modiGovernment #melodi",
        image: "https://indianmemetemplates.com/wp-content/uploads/aap-log-rona-band-kijiye-1024x576.jpg",
        time: "5m"
    },
    {
        name: "Rohit Sharma",
        username: "rohit_codes",
        avatar: "https://randomuser.me/api/portraits/men/34.jpg",
        content: " tax jaisa kuchh nhi hota 2014 ke baad bas desh bhakti dekho modi ji desh bhakt unhone kiya hai to soch samjhkar hi kiya hoga😂 #devlife",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4HFH7ff7xXMyIGXvqw89vQX5lgrc7HnPKMJRCnwPn9RB9o7p1jNJkIHocQO_Zr58rfM&usqp=CAU",
        time: "30m"
    },
    {
        name: "Neha Verma",
        username: "neha_uiux",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        content: "Design is not just what it looks like and feels like. Design is how it works. 💡",
        image: "https://source.unsplash.com/random/800x400?design",
        time: "1h"
    },
    {
        name: "Kunal Joshi",
        username: "kunal_dev",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        content: "Learning Node.js backend while sipping coffee ☕. Life's good!",
        image: "https://source.unsplash.com/random/800x400?nodejs",
        time: "2h"
    },
    {
        name: "Shruti Mehta",
        username: "shruti.codes",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        content: "Dark mode is a blessing for late-night coders 🌙 #tailwindcss",
        image: "https://source.unsplash.com/random/800x400?dark",
        time: "3h"
    }
];

const MainContent = () => {
    return (
        <div className='m-0 p-0 mt-3 w-full overflow-scroll overflow-y-scroll h-screen scrollbar-hide'>
            <Navbar />
            <TweetPost />
            <div className="min-h-screen bg-gray-100 dark:bg-black py-6 px-4">
                {dummyTweets.map((tweet, index) => (
                    <TweetCard
                        key={index}
                        name={tweet.name}
                        username={tweet.username}
                        avatar={tweet.avatar}
                        content={tweet.content}
                        image={tweet.image}
                        time={tweet.time}
                    />
                ))}

            </div>
        </div>
    )
}

export default MainContent
