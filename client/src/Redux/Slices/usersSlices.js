const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userName: null,
  linkName: null,
  avatar: null,
  email: null,
  firstName: null,
  lastName: null,
  country: null,
  city: null,
  adress: null,
  phone: null,
  birthday: null,
  isLog: false,
  verify: false,
  isLoading: false,
  userDetail: null,
  token: null,
  users: false,
  pages: 0,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserName: (store, action) => {
      if (!action.payload) {
        store.userName = null;
      } else {
        (store.userName = action.payload), (store.isLog = true);
      }
    },
    setIsLog: (store, action) => {
      store.token = action.payload;
      if (localStorage.getItem("token")) {
        store.isLog = true;
      } else {
        (store.isLog = false),
          (store = {
            userName: null,
            linkName: null,
            avatar: null,
            email: null,
            firstName: null,
            lastName: null,
            country: null,
            city: null,
            adress: null,
            phone: null,
            birthday: null,
            isLog: false,
            verify: false,
            isLoading: false,
            userDetail: null,
            token: null,
            users: false,
          });
      }
    },
    logout: (store) => {
      store.isLog = false;
    },
    setIsLoading: (store, action) => {
      store.isLoading = action.payload;
    },
    setDataUser: (store, action) => {
      (store.avatar = action.payload.avatar),
        (store.firstName = action.payload.firstName),
        (store.lastName = action.payload.lastName),
        (store.userName = action.payload.userName),
        (store.email = action.payload.email),
        (store.country = action.payload.country),
        (store.city = action.payload.city),
        (store.adress = action.payload.adress),
        (store.phone = action.payload.phone),
        (store.birthday = action.payload.birthday),
        (store.verify = action.payload.verify);
    },
    setUserDetail: (store, action) => {
      store.userDetail = action.payload;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
    },
    setDeletedUsers: (store, action) => {
      store.users = action.payload;
    },
    setPagesUsers: (store, action) => {
      store.pages = action.payload;
    },
  },
});

export const {
  setUserName,
  setIsLog,
  logout,
  setIsLoading,
  setDataUser,
  setUserDetail,
  setEmail,
  setDeletedUsers,
  setPagesUsers,
} = usersSlice.actions;
