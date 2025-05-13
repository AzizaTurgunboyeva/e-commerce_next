import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id == item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item });
      }
      state.totalAmount += item.price * item.quantity;
      state.count += item.quantity;
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
