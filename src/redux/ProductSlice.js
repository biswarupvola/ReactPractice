import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'productsList',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
        state.products.push(action.payload.products)
    },
    removeProduct: (state, action) => {
      state.products -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer