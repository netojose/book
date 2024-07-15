import { MAX_ORDERBOOK_ENTRIES } from "@/utils/constants";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type OrderEntry = { price: number; count: number; amount: number };

export interface OrderBookState {
  precision: number;
  items: Array<OrderEntry & { id: number }>;
}

const initialState: OrderBookState = {
  precision: 0, // 0 - 4
  items: [],
};

export const orderBookSlice = createSlice({
  name: "orderBook",
  initialState,
  reducers: {
    addEntry: (state, { payload }: PayloadAction<OrderEntry>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = [
        ...state.items,
        { ...payload, id: performance.now() },
      ].slice(-MAX_ORDERBOOK_ENTRIES);
    },
    addEntries: (state, { payload }: PayloadAction<Array<OrderEntry>>) => {
      state.items = [
        ...state.items,
        ...payload.map((item) => ({ ...item, id: performance.now() })),
      ].slice(-MAX_ORDERBOOK_ENTRIES);
    },
    increasePrecision: (state) => {
      state.precision = state.precision + 1;
    },
    decreasePrecision: (state) => {
      state.precision = state.precision + 1;
    },
  },
});

export const { addEntry, addEntries, increasePrecision, decreasePrecision } =
  orderBookSlice.actions;

export default orderBookSlice.reducer;
