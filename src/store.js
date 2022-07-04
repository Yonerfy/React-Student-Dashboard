import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./features/studentSlice";
import filterSlice from "./features/filterSlice";
import studentExtraDataSlice from "./features/studentExtraDataSlice";

export default configureStore({
  reducer: {
    student: studentSlice,
    filter: filterSlice,
    studentExtraData: studentExtraDataSlice,
  },
});
