import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: number
  nome: string
  descricao: string
  porcao: string
  preco: number
  foto: string
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload
      state.items.push(item)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { add, open, close, clear, remove } = cartSlice.actions
export default cartSlice.reducer
