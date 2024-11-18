import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
interface CounterState {
  counter: number;
}

// Initial state
const initialState: CounterState = {
  counter: 0,
};

// Create a slice (a reducer + actions) for the counter
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },
  },
});

// Create the store with the counter slice
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Export actions to use in components
export const { increment, decrement, setCounter } = counterSlice.actions;

// Export the store
export default store;

// Type for RootState
export type RootState = ReturnType<typeof store.getState>;
// Type for AppDispatch
export type AppDispatch = typeof store.dispatch;
