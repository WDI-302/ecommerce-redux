import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Axios from '../lib/Axios'
import { authSuccess } from "./authSlice"

export const fetchUser = createAsyncThunk('user/fetchUser', async (userData, thunkAPI) => {
    let response = await Axios.post('/users/login', userData)

    // remember me button checked
    // isRemember && localStorage.setItem('jwtToken', response.data.token)
    
    localStorage.setItem('jwtToken', response.data.token)
    
    //dispact authSlice - authSuccess
    thunkAPI.dispatch(authSuccess())

    return  {
        user: response.data.userObj
    }
})

export const registerUser = createAsyncThunk('user/registerUser', async userData => {
    let response = await Axios.post('/users/register', userData)
    return {
        user: response.data.userObj
    }
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        password: ''
    },
    // syncronous set state
    reducers: {

    },
    // asyncronous set state
    extraReducers: builder => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.username = action.payload.user.username
                state.email = "test@string.com"
                state.password = action.payload.user.password
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state = action.payload.user
            })

    }
})

export const {} = userSlice.actions

export default userSlice.reducer