import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./fetures/user/userSlice";
import movieReducer from "./fetures/movie/movieSlice";
// import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
