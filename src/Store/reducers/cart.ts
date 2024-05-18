import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: number
  nome: string
  descricao: string
  porcao: string
  preco: number
  foto: string
  quantidade: number // Adicionando a propriedade quantidade
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
    add: (state, action: PayloadAction<Omit<CartItem, 'quantidade'>>) => {
      const item = action.payload
      const existingItem = state.items.find((i) => i.id === item.id)

      if (existingItem) {
        existingItem.quantidade += 1
      } else {
        state.items.push({ ...item, quantidade: 1 })
      }
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
      const itemId = action.payload
      const existingItem = state.items.find((i) => i.id === itemId)

      if (existingItem && existingItem.quantidade > 1) {
        existingItem.quantidade -= 1
      } else {
        state.items = state.items.filter((item) => item.id !== itemId)
      }
    }
  }
})

export const { add, open, close, clear, remove } = cartSlice.actions
export default cartSlice.reducer
