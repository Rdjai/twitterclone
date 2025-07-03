import React from 'react';

const RightComponent = () => {
    const trends = [
        { id: 1, title: 'React 19', tweets: '12.3K Tweets' },
        { id: 2, title: 'OpenAI Dev Day', tweets: '38.1K Tweets' },
        { id: 3, title: '#TailwindCSS', tweets: '9,543 Tweets' },
    ];

    const suggestions = [
        { id: 1, name: 'John Doe', username: 'john_doe' },
        { id: 2, name: 'Jane Smith', username: 'jane_smith' },
    ];

    return (
        <div className="w-2/4 hidden lg:block bg-black border-l border-gray-800 text-white px-4 py-6 space-y-6">
            {/* Search Bar */}
            <div className="sticky top-0 z-10 bg-black">
                <input
                    type="text"
                    placeholder="Search Tweens"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none"
                />
            </div>

            {/* What's happening */}
            <div className="bg-gray-900 rounded-xl p-4">
                <h3 className="font-bold text-lg mb-4">What's happening</h3>
                {trends.map((trend) => (
                    <div key={trend.id} className="mb-4 hover:bg-gray-800 p-2 rounded-lg transition cursor-pointer">
                        <p className="text-sm text-gray-400">Trending</p>
                        <h4 className="font-semibold">{trend.title}</h4>
                        <p className="text-sm text-gray-500">{trend.tweets}</p>
                    </div>
                ))}
                <p className="text-blue-500 hover:underline cursor-pointer text-sm mt-2">Show more</p>
            </div>

            {/* Who to follow */}
            <div className="bg-gray-900 rounded-xl p-4">
                <h3 className="font-bold text-lg mb-4">Who to follow</h3>
                {suggestions.map((user) => (
                    <div key={user.id} className="flex items-center justify-between mb-4 hover:bg-gray-800 p-2 rounded-lg transition cursor-pointer">
                        <div className="flex items-center gap-3">
                            <img
                                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${user.username}`}
                                alt={user.name}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h4 className="font-semibold">{user.name}</h4>
                                <p className="text-sm text-gray-400">@{user.username}</p>
                            </div>
                        </div>
                        <button className="bg-white text-black px-4 py-1 text-sm rounded-full font-medium">Follow</button>
                    </div>
                ))}
                <p className="text-blue-500 hover:underline cursor-pointer text-sm mt-2">Show more</p>
            </div>
        </div>
    );
};

export default RightComponent;
