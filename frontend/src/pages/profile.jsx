import React, { useEffect, useState, useRef } from 'react';
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { getUserProfile, updateProfile } from '../services/apiService';
import TweetCard from '../component/TweetCard';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const fetchUserData = async () => {
        try {
            const res = await getUserProfile();
            if (res?.user) {
                setUser(res);
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append('profilePic', file);

        try {
            setLoading(true);
            const res = await updateProfile(formData);

            if (!res || !res.profilePic) {
                throw new Error(res?.error || 'Upload failed');
            }

            console.log("Profile picture uploaded successfully:", res);
            setUser(prev => ({ ...prev, profilePic: res.profilePic }));
        } catch (error) {
            console.error("Error uploading profile picture:", error);
            alert("Failed to upload profile picture.");
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (selected) {
            uploadFile(selected);
        }
    };

    if (!user) return <div className="text-white text-center mt-20">Loading profile...</div>;
    console.log("user data:", user);



    return (
        <div className="w-full text-white  h-screen scrollbar-hide">
            <div className="flex justify-between items-center p-5 border-b border-gray-800">
                <div className="flex items-center">
                    <ArrowLeft
                        onClick={() => navigate(-1)}
                        className='cursor-pointer text-white h-6 w-6'
                    />
                    <div className="ml-3">
                        <h3 className='text-xl font-bold'>{user.user[0].userName}</h3>
                        <h6 className='text-gray-400 text-sm'>{user.tweets?.length || 0} posts</h6>
                    </div>
                </div>
                <Search className='cursor-pointer text-white h-6 w-6' />
            </div>
            <div className='w-full text-white overflow-y-auto  h-screen scrollbar-hide'>
                <div className="h-40 bg-gray-700 w-full"></div>
                <div className="relative px-5 cursor-pointer" onClick={() => !loading && fileInputRef.current.click()}>
                    <img
                        src={`http://localhost:8000/${user.user[0].profilePic}` || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"}
                        alt={user.user[0].userName || "User profile image"}
                        className={`w-24 h-24 rounded-full border-4 border-black -mt-12 object-cover ${loading ? 'opacity-50' : ''}`}
                    />
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    {loading && <p className="text-sm text-gray-400 mt-1">Uploading...</p>}
                </div>
                <div className="px-5 mt-2">
                    <h2 className="text-xl font-bold">{user.user[0].userName}</h2>
                    <p className="text-gray-500">@{user.user[0].email?.split("@")[0]}</p>
                    <p className="text-sm mt-2">{user.user[0].bio || "No bio available."}</p>
                    <p className="text-sm text-gray-400 mt-1">Joined {new Date(user.user[0].createdAt).toLocaleDateString()}</p>

                    <div className="flex gap-4 mt-2 text-sm">
                        <span><strong>{user.user[0].following?.length || 0}</strong> Following</span>
                        <span><strong>{user.user[0].followers?.length || 0}</strong> Followers</span>
                    </div>
                </div>
                <div className="mt-4 px-5">
                    <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-2">Tweets</h3>
                    {user.tweets?.length > 0 ? (
                        user.tweets.map((tweet, index) => (
                            <TweetCard
                                key={tweet._id || index}
                                name={tweet.author?.Name || "Unknown"}
                                username={tweet.author?.userName || "unknown"}
                                avatar={`http://localhost:8000/${user.user[0].profilePic}` || "https://via.placeholder.com/150"}
                                content={tweet.text}
                                image={`http://localhost:8000${tweet.mediaUrl}` || null}
                                time={new Date(tweet.createdAt).toLocaleTimeString()}
                            />
                        ))
                    ) : (
                        <p className="text-gray-400">No tweets yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
