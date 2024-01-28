import { createSlice } from "@reduxjs/toolkit";
import { connect } from "react-redux";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItem: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const cartItem = action.payload?.card?.info?.id;

      const item = state.items.find((pro) => pro?.card?.info?.id === cartItem);
      if (item) {
        item.quantity++;
        state.totalItem++;
        console.log("already contain this item in cart");
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalItem++;
      }
    },
    removeItem: (state, action) => {
      const cartItem = action.payload?.card?.info?.id;
      const item = state.items.find((pro) => pro?.card?.info?.id === cartItem);
      if (action.payload.quantity === undefined) console.log("Can't remove");
      else if (item.quantity > 1) {
        item.quantity--;
        state.totalItem--;
      } else {
        const filterItem = state.items.filter(
          (pro) => pro?.card?.info?.id !== cartItem
        );
        state.items = filterItem;
        state.totalItem--;
      }
      // else if (state.totalItem != 0) {
      //   // state.items.push({ ...action.payload, quantity: 1 });
      //   // state.totalItem=0;
      // }
    },
    clearItem: (state) => {
      state.totalItem = 0;
      state.items.length = 0;
    },
  },
});
export default cartSlice.reducer;
export const { addItem, removeItem, clearItem } = cartSlice.actions;
