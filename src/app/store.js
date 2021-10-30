import { configureStore } from "@reduxjs/toolkit";
import { finsApi } from "../services/finsApi";

export default configureStore({
  reducer: {
      [finsApi.reducerPath] : finsApi.reducer
  },
});
