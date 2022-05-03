/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchMessagesAsync from './API/greetings';

const initialState = {
  message: '',
};

const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    getGreetings: (state, action) => {
      state.message = action.payload.message;
    },
  },
});

export const { getGreetings } = greetingsSlice.actions;

export const getGreetingsThunk = () => async (dispatch) => {
  const data = await fetchMessagesAsync();
  dispatch(getGreetings(data));
};

export default greetingsSlice.reducer;
