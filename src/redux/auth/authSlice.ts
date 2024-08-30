import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  registerData: null;
}

const initialState: AuthState = {
  registerData: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRegisterData: (state, action) => {
      state.registerData = action.payload;
    },
  },
});

export const {setRegisterData} = authSlice.actions;

export default authSlice.reducer;
