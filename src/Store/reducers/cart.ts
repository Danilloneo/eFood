import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Food } from '../../components/pages/Home'

type CartState = {
  items: Food[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Food>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
