import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import loginReducer from './features/login/loginSlice'

export function makeStore() {
  return configureStore({
    reducer: { login: loginReducer },
    devTools: process.env.NODE_ENV !== 'production',
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
