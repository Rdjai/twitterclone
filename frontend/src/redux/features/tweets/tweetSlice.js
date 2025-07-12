import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tweets: [],
    loading: false,
}

const tweetSlice = createSlice({

    name: "tweets",
    initialState,
    reducers: {
        setTweets: (state, action) => {
            state.tweets = action.payload;
        },
        addTweet: (state, action) => {
            state.tweets.unshift(action.payload);
        },
        updateTweet: (state, action) => {
            const index = state.tweets.findIndex(tweet => tweet._id === action.payload._id);
            if (index !== -1) {
                state.tweets[index] = action.payload;
            }
        },
        deleteTweet: (state, action) => {
            state.tweets = state.tweets.filter(tweet => tweet._id !== action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        likePostSlice: (state, action) => {
            const { userId, tweetId } = action.payload;
            const tweet = state.tweets.find(tweet => tweet._id === tweetId);
            if (!tweet) return;
            const index = tweet.like.indexOf(userId);
            if (index > -1) tweet.like.splice(index, 1);
            else tweet.like.push(userId);
        }
    }
});

export const { setTweets, addTweet, updateTweet, deleteTweet, setLoading, likePostSlice } = tweetSlice.actions;
export default tweetSlice.reducer;