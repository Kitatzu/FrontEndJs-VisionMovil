import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: null,
  userName: null,
  firstName: null,
  lastName: null,
  email: null,
  country: null,
  city: null,
  adress: null,
  phone: null,
  isLog: false,
  verifiyUser: false,
  isLoading: false,
  userDetail: null,
  token: null,
  users: false,
  pages: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (store, action) => {
      if (!action.payload) {
        store.userName = null;
      } else {
        store.userName = action.payload;
        store.isLog = true;
      }
    },
    setIsLog: (store, action) => {
      store.token = action.payload;
      if (localStorage.getItem("token")) {
        store.isLog = true;
      } else {
        store.isLog = false;
        store = {
          avatar: null,
          userName: null,
          firstName: null,
          lastName: null,
          email: null,
          country: null,
          city: null,
          adress: null,
          phone: null,
          isLog: false,
          verifiyUser: false,
          isLoading: false,
          userDetail: null,
          token: null,
          users: false,
          pages: 0,
        };
      }
    },
    logout: (store) => {
      store.isLog = false;
    },
    setIsLoading: (store, action) => {
      store.isLoading = action.payload;
    },
    setData: (store, action) => {
      (store.avatar = action.payload.avatar),
        (store.userName = action.payload.userName),
        (store.firstName = action.payload.firstName),
        (store.email = action.payload.email),
        (store.country = action.payload.country),
        (store.city = action.payload.city),
        (store.adress = action.payload.adress),
        (store.phone = action.payload.phone),
        (store.verifiyUser = action.payload.verifiyUser);
    },
    setUserDetail: (store, action) => {
      store.userDetail = action.payload;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
    },
    setUsers: (store, action) => {
      store.users = action.payload;
    },
    setDeletedUsers: (store, action) => {
      store.users = action.payload;
    },
    setUsersDeleted: (store, action) => {
      store.users = action.payload;
    },
    setPagesUser: (state, action) => {
      state.pages = action.payload;
    },
  },
});

export const {
  setUserName,
  setIsLog,
  logout,
  setIsLoading,
  setData,
  setUserDetail,
  setEmail,
  setUsers,
  setDeletedUsers,
  setUsersDeleted,
  setPagesUser,
} = userSlice.actions;
