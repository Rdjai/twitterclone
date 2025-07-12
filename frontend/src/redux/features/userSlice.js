import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userinfo: null,
    loading: false,
    error: null,
}

const userSlice = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            setUserInfo: (state, action) => {
                state.userinfo = action.payload;
                state.loading = false;
                state.error = null;

            },
            clearuserInfo: (state) => {
                state.userinfo = null;
                state.loading = false;
                state.error = null;
            },
            setLoading: (state, action) => {
                state.loading = action.payload;
            },
            setUserError: (state, action) => {
                state.error = action.payload;
                state.loading = false;
            }
        }
    }
)

export const { setUserInfo, clearuserInfo, setLoading, setUserError } = userSlice.actions;

export default userSlice.reducer;