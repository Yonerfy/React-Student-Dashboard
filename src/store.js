import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./features/studentSlice";
export default configureStore({
  reducer: {
    student: studentSlice,
  },
});
