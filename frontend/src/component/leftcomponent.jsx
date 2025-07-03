import React from 'react';
import {
    House,
    Search,
    Bell,
    Mail,
    Users,
    User,
    MoreHorizontal
} from 'lucide-react';

const LeftComponent = () => {
    return (
        <div className="leftcomponent w-2/5 h-screen bg-black text-white border-r border-gray-800 p-4 flex flex-col justify-between">
            {/* Logo or Title */}
            <div className="text-2xl font-bold mb-6 text-blue-500">Tweens</div>

            {/* Navigation Menu */}
            <ul className="space-y-4">
                <MenuItem icon={<House />} label="Home" />
                <MenuItem icon={<Search />} label="Explore" />
                <MenuItem icon={<Bell />} label="Notification" />
                <MenuItem icon={<Mail />} label="Messages" />
                <MenuItem icon={<Users />} label="Communities" />
                <MenuItem icon={<User />} label="Profile" />
                <MenuItem icon={<MoreHorizontal />} label="More" />

                {/* Post Button */}
                <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full font-semibold transition">
                    Post
                </button>
            </ul>

            {/* Profile Card */}
            <div className="mt-8 flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer transition">
                <img
                    src="https://pbs.twimg.com/profile_images/1834111746761777152/AnOcYg2N_400x400.jpg"
                    alt="Profile"
                    className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex-1">
                    <p className="font-semibold text-sm">Rdj Kashyap</p>
                    <h6 className="text-gray-400 text-xs">@RdKashyap</h6>
                </div>
                <MoreHorizontal className="text-gray-400 h-4 w-4" />
            </div>
        </div>
    );
};

// Reusable Menu Item
const MenuItem = ({ icon, label }) => (
    <li className="flex items-center gap-4 hover:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer transition">
        {icon}
        <h4 className="text-sm font-medium">{label}</h4>
    </li>
);

export default LeftComponent;
