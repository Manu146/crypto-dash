import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

const user = { username: "usertest1", password: "123456." };
const userData = { id: 1, username: "usertest1" };

const fakeLogin = ({ username, password }) => {
  console.log(username, password);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username !== user.username || password !== user.password)
        reject("Username or password incorrect");
      resolve(userData);
    }, 2000);
  });
};

export const login = createAsyncThunk(
  "auth/login",
  async (username, password) => {
    const response = await fakeLogin(username, password);
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearStatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default authSlice.reducer;

export const authSelector = (state) => state.auth.data;
export const authStatusSelector = (state) => state.auth.status;
