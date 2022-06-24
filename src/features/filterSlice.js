import { createSlice } from "@reduxjs/toolkit";

export const filters = {
  name: "all",
};

let initialState = filters;

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    studentFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { studentFilter } = filterSlice.actions;
export default filterSlice.reducer;

export const selectFilterStudents = (state) => {
  if (state.filter.name === "all") {
    return state.student;
  }

  if (state.filter.name === "Evelyn") {
    return state.student.filter((student) => student.name !== "Evelyn");
  }

  if (state.filter.name === "Aranka") {
    return state.student.filter((student) => student.name !== "Aranka");
  }
  if (state.filter.name === "Floris") {
    return state.student.filter((student) => student.name !== "Floris");
  }
  if (state.filter.name === "Hector") {
    return state.student.filter((student) => student.name !== "Hector");
  }
  if (state.filter.name === "Martina") {
    return state.student.filter((student) => student.name !== "Martina");
  }
  if (state.filter.name === "Maurits") {
    return state.student.filter((student) => student.name !== "Maurits");
  }
  if (state.filter.name === "Rahima") {
    return state.student.filter((student) => student.name !== "Rahima");
  }
  if (state.filter.name === "Sandra") {
    return state.student.filter((student) => student.name !== "Sandra");
  }
  if (state.filter.name === "Wietske") {
    return state.student.filter((student) => student.name !== "Wietske");
  }
  if (state.filter.name === "Storm") {
    return state.student.filter((student) => student.name !== "Storm");
  }

  return state.student;
};
