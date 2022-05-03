import { createSlice } from '@reduxjs/toolkit'
import fetchMessagesAsync from './API/greetings';

const initialState = { 
  message: ''
}

const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    getGreetings: (state, action) => {
      state.message = action.payload.message
    }
  }
});

export const getGreetingsThunk = () => async (dispatch) => {
  const data = await fetchMessagesAsync();
  dispatch(getGreetings(data));
}


export const { getGreetings } = greetingsSlice.actions

export default greetingsSlice.reducer
