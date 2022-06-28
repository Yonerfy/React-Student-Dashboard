import { createSlice } from "@reduxjs/toolkit";

export const filters = {
  name: "all",
  checked: false,
};

let initialState = filters;

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    studentFilter(state, action) {
      state.name = action.payload;
    },
    sameStudent(state, action) {
      state.checked = action.payload;
    },
  },
});

export const { studentFilter, sameStudent } = filterSlice.actions;
export default filterSlice.reducer;

export const selectFilterStudents = (state) => {
  if (state.filter.name === "all") {
    return state.student;
  }

  let studentArr = [];
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  checkbox.forEach((chk) => chk.checked && studentArr.push(chk.name));

  const filterDataAvg = state.student.filter((student) =>
    studentArr.includes(student.name)
  );

  return filterDataAvg;
};
