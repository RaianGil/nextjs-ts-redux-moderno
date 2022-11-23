import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState, AppThunk } from '../../store'
import { axiosLogin } from './loginAPI'

export interface LoginState {
  username: string,
  password: string,
  remeber: boolean,
  err: boolean,
  status: 'idle' | 'loading' | 'failed'
}

const initialState: LoginState = {
  username: '',
  password: '',
  remeber: false,
  err: false,
  status: 'idle'
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, {payload}: PayloadAction<string>) => {
      state.username = payload
    },
    setPassword: (state, {payload}: PayloadAction<string>) => {
      state.password = payload
    },
    setRemember: (state, {payload}: PayloadAction<boolean>) => {
      state.remeber = payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginAPI.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginAPI.fulfilled, (state, action) => {
        state.status = 'idle'
        state.err = (String(action.payload) === 'Error')
      })
      .addCase(loginAPI.rejected, (state) => {
        state.status = 'failed'
      })
  },
})
export const loginAPI = createAsyncThunk(
  'login/axiosLogin',
  async (data:{username:string, password:string}) => {
    const response = await axiosLogin(data)
    console.log(response, data)
    return response.data
  }
)
export const selectRemember = (state: AppState) => state.login.remeber
export const selectUsername = (state: AppState) => state.login.username
export const selectPassword = (state: AppState) => state.login.password
export const selectErr = (state: AppState) => state.login.err

export const { setUsername, setPassword, setRemember } = loginSlice.actions

export default loginSlice.reducer