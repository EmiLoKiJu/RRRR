import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
  try {
    const response = await axios.get('/greetings/random');
    const message = response.data.greeting;
    return message;
  } catch (error) {
    console.error(error);
  }
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: { message: '', isLoading: true },
  extraReducers: (builder) => {
    builder
      .addCase(getGreetings.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getGreetings.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        message: action.payload,
      }))
      .addCase(getGreetings.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

export default greetingsSlice.reducer;
