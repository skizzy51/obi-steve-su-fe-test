import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    userList: [],
    loggedIn : false,
}

export const getAllUsers = createAsyncThunk('getAllUsers', async (data, thunkAPI) => {
    try {
        const response = await fetch('https://639a3f4b16b0fdad77584051.mockapi.io/api/v3/users', {
            method : 'get'
        }).then(res => res.json())
        return response
    } catch (error) {
        return thunkAPI.rejectWithValue(true)
    }
})

const userReducer = createSlice({
    name : 'user',
    initialState,
    reducers : {
        login : (state) => {
            state.loggedIn = true
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.userList = [...action.payload]
        })
        .addCase(getAllUsers.rejected, (state) => {
            alert('Server error')
        })
    }
})

export const { login } = userReducer.actions

export default userReducer.reducer