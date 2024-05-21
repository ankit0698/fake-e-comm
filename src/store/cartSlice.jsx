import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((cartItem) => cartItem.id === action.payload.id);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },
  reducers: {
    add(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) state.list[existingItemIndex].quantity += 1;
      else state.list.push({ ...action.payload, quantity: 1 });
      // state.push(action.payload);
    },
    remove(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);

      state.list.splice(existingItemIndex, 1);
      // return state.filter((product) => product.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity += 1;
    },
    decreaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity -= 1;
      if (state.list[existingItemIndex].quantity === 0)
        state.list.splice(existingItemIndex, 1);
    },
  },
});

export const { add, remove, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
