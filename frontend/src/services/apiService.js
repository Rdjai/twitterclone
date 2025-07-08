import axios from 'axios';

const base_url = 'http://localhost:8000/api';

export const singupUser = async (userData) => {
    if (!userData || typeof userData !== 'object') {
        throw new Error("Invalid user data provided");
    }
    try {
        const response = await axios.post(`${base_url}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { error: "Something went wrong" };
    }
}

export const loginUser = async (userData) => {
    try {
        if (!userData || typeof userData !== 'object') {
            throw new Error("Invalid user data provided");
        }
        const response = await axios.post(`${base_url}/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { error: "Something went wrong" };
    }
}

export const Alltweet = async () => {
    try {
        const response = await axios.get(`${base_url}/tweet/feed`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // console.log("All Tweets Response:", response.data);
        // if (!response.data || !Array.isArray(response.data.tweets)) {
        //     throw new Error("Invalid response format");
        // }

        return response.data;
    } catch (error) {
        throw error.response?.data || { error: "Something went wrong" };
    }
};

export const postTweet = async (tweetData) => {
    try {
        if (!tweetData || typeof tweetData !== 'object') {
            throw new Error("Invalid tweet data provided");
        }
        const response = await axios.post(`${base_url}/tweet/write`, tweetData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("❌ Write Tweet Error:", error);
        throw error.response?.data || { error: "Something went wrong" };
    }
}
export const getUserProfile = async () => {
    try {
        if (!localStorage.getItem("token")) {
            throw new Error("User is not authenticated");
        }
        const response = await axios.get(`${base_url}/me/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { error: "Something went wrong" };
    }
}

export const updateProfile = async (formData) => {
    try {
        const res = await axios.put(`${base_url}/profile/update`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return res.data;
    } catch (error) {
        console.error("Upload error:", error);
        return { error: error.response?.data?.message || "Upload failed" };
    }
};

export const likePost = async (postId) => {
    try {
        const response = await axios.post(`${base_url}/tweet/like`, { postId }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { error: "Something went wrong" };
    }
}

export const followUser = async (userId) => {
    try {
        const response = await axios.post(`${base_url}/user/follow`, { Id: userId }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { error: "Something went wrong" };
    }
}

