import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    firstName: "Evelyn",
    last_name: "Simoes",
    email: "csimoes0@bigcartel.com",
    PhoneNumber: "120-330-8813",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    firstName: "Aranka",
    last_name: "Surplice",
    email: "hsurplice1@printfriendly.com",
    PhoneNumber: "285-137-1328",
    photo:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    firstName: "Floris",
    last_name: "Pyett",
    email: "ipyett2@sogou.com",
    PhoneNumber: "649-551-0710",
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    firstName: "Hector",
    last_name: "Wellbank",
    email: "jwellbank3@oaic.gov.au",
    PhoneNumber: "210-714-5497",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    firstName: "Martina",
    last_name: "Normaville",
    email: "gnormaville4@bigcartel.com",
    PhoneNumber: "285-335-5244",
    photo:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    firstName: "Rahima",
    last_name: "Santos",
    email: "rihima-santos@bigcartel.com",
    PhoneNumber: "125-335-5489",
    photo:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
  },
  {
    firstName: "Maurits",
    last_name: "Bonilla",
    email: "maurits@bigcartel.com",
    PhoneNumber: "589-123-9863",
    photo:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    firstName: "Sandra",
    last_name: "Hernadez",
    email: "sandra@bigcartel.com",
    PhoneNumber: "745-324-654",
    photo:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    firstName: "Wietske",
    last_name: "Warden",
    email: "wardenwietske@bigcartel.com",
    PhoneNumber: "359-324-753",
    photo:
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    firstName: "Storm",
    last_name: "Brown",
    email: "storm@bigcartel.com",
    PhoneNumber: "951-157-759",
    photo:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const studentExtraDataSlice = createSlice({
  name: "extra-student-data",
  initialState,
  reducers: {},
});

export const {} = studentExtraDataSlice.actions;

export default studentExtraDataSlice.reducer;
