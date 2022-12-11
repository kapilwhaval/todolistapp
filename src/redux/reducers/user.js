import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null
}

export const userSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        removeUser: (state) => {
            state.user = null
            state.token = null
        }
    },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer