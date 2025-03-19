
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:4096/Cart/${userId}`);
    return response.data.Cart;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});
const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  error: null,
}
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, price } = action.payload;
      const existingItem = state.items.find((item) => item.productId === productId);
    
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.productId === action.payload.productId);
      if (itemIndex !== -1) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.totalPrice -= state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.totalQuantity = action.payload.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = action.payload.reduce((total, item) => total + item.price * item.quantity, 0);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;

