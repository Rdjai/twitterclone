import React from "react";

const TweetCard = ({ name, username, avatar, content, image }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 max-w-xl w-full mx-auto mb-4">
            <div className="flex items-start gap-3">
                <img
                    src={avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg">{name}</h3>
                        <span className="text-gray-500">@{username}</span>
                    </div>
                    <p className="text-gray-800 mt-1">{content}</p>
                    {image && (
                        <img
                            src={image}
                            alt="tweet"
                            className="rounded-xl mt-3 max-h-80 object-cover"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TweetCard;
