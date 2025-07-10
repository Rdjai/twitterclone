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
    }
});

export const { setTweets, addTweet, updateTweet, deleteTweet, setLoading } = tweetSlice.actions;
export default tweetSlice.reducer;