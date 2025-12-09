import { createSlice } from '@reduxjs/toolkit'

interface UIState {
  sidebarStep: 'cart' | 'delivery' | 'payment' | 'confirmation'
}

const initialState: UIState = {
  sidebarStep: 'cart'
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeStep: (state, action) => {
      state.sidebarStep = action.payload
    }
  }
})

export const { changeStep } = uiSlice.actions
export default uiSlice.reducer
