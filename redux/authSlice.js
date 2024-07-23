import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: { username: null },
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
      AsyncStorage.setItem('username', action.payload);
    },
    logout: (state) => {
      state.username = null;
      AsyncStorage.removeItem('username');
    },
    setUser: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;

export const loadUser = () => async (dispatch) => {
  const username = await AsyncStorage.getItem('username');
  if (username) {
    dispatch(setUser(username));
  }
};
