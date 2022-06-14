import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./features/studentSlice";
import filterSlice from "./features/filterSlice";

export default configureStore({
  reducer: {
    student: studentSlice,
    filter: filterSlice,
  },
});
