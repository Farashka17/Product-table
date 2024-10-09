import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  id:"salam"
}

export const counterSlice = createSlice({
  name: 'counter',
 
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
   
    setId: (state, action) => {
      state.id = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, setId } = counterSlice.actions

export default counterSlice.reducer