import { createSlice } from '@reduxjs/toolkit';
import { registration, logIn, logOut, refreshUser } from './operations';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(registration.pending, (state) => {
            state.loading = true;
        state.error = null;
        }).addCase(registration.fulfilled, (state, action) => {
            state.user = action.payload.user;
        state.token = action.payload.token;
            state.isLoggedIn = true;
            state.loading = false;
        }).addCase(registration.rejected, (state, action) => {
           state.loading = false;
        state.error = action.payload;
        }).addCase(logIn.pending, (state) => {
            state.loading = true;
        state.error = null;
        }).addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
            state.isLoggedIn = true;
            state.loading = false;
      }).addCase(logIn.rejected, (state, action) => {
           state.loading = false;
        state.error = action.payload;
      }).addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = null;   
        }).addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
            state.isLoggedIn = false;
            state.loading = false;
        }).addCase(logOut.rejected, (state, action) => {
          state.error = action.payload;
        state.loading = false;
      })
      .addCase(refreshUser.pending, (state) => {
          state.isRefreshing = true;
          state.loading = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
          state.isRefreshing = false;
          state.loading = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
          state.isRefreshing = false;
          state.error = action.payload;
          state.loading = false;
      });
    }
})

export const authReducer = authSlice.reducer;