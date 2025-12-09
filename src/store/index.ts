import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/carts'
import uiReducer from './reducers/ui'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
