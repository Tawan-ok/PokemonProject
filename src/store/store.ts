import { configureStore } from '@reduxjs/toolkit'

import rootReducers from './reducers'

export const store = configureStore({
  reducer: rootReducers,
  devTools: !import.meta.env.PROD,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
