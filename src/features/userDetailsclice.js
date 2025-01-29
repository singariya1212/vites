import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createUser = createAsyncThunk(
    'createUser',
    async (data, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          'https://677818a080a79bf91903e755.mockapi.io/crud',
          data
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response ? error.response.data : error.message
        );
      }
    }
  );
  export const showUsers = createAsyncThunk(
    'showUsers',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          'https://677818a080a79bf91903e755.mockapi.io/crud'
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response ? error.response.data : error.message
        );
      }
    }
  );
  export const deleteUser = createAsyncThunk(
    "deleteUser",
    async (id, { rejectWithValue }) => {
      try {
        await axios.delete(
          `https://677818a080a79bf91903e755.mockapi.io/crud/${id}`
        );
       
        
        return id; // Return the ID of the deleted user
      } catch (error) {
        return rejectWithValue(
          error.response ? error.response.data : error.message
        );
      }
    }
  );
  export const updateUser = createAsyncThunk(
    'updateUser',
    async ({ id, data }, { rejectWithValue }) => {
      try {
        const response = await axios.put(
          `https://677818a080a79bf91903e755.mockapi.io/crud/${id}`,
          data
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response ? error.response.data : error.message
        );
      }
    }
  );
  export const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
      users: [], // List of users
      loading: false, // Loading state
      error: null, // Error state
    },
    reducers: {}, // Additional reducers can be added here
    extraReducers: (builder) => {
      builder
        // Handle createUser pending
        .addCase(createUser.pending, (state) => {
          state.loading = true;
          state.error = null; // Clear previous errors
        })
        // Handle createUser fulfilled
        .addCase(createUser.fulfilled, (state, action) => {
          state.loading = false;
          state.users.push(action.payload); // Add the new user to the list
        })
        // Handle createUser rejected
        .addCase(createUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Something went wrong'; // Set the error message
        })
        .addCase(showUsers.pending, (state) => {
          state.loading = true;
          state.error = null; // Clear previous errors
        })
        // Handle createUser fulfilled
        .addCase(showUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.users=action.payload// Add the new user to the list
        })
        // Handle createUser rejected
        .addCase(showUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Something went wrong'; // Set the error message
        })
        .addCase(deleteUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
          state.loading = false;
          console.log(action.payload,"hello hhhhhhhhhhhhh");
          
          state.users = state.users.filter((user) => user.id !== action.payload);
        })
        .addCase(deleteUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || "Something went wrong";
        }).addCase(updateUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          state.loading = false;
          const updatedUser = action.payload;
          const index = state.users.findIndex((user) => user.id === updatedUser.id);
          if (index !== -1) {
            state.users[index] = updatedUser; // Update the user in the list
          }
        })
        .addCase(updateUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Something went wrong';
        })
    },
  });
  
  // Export the reducer for store configuration
  export default userDetail.reducer;
