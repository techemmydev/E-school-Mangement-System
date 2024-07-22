import { createSlice } from "@reduxjs/toolkit";
import { imageformat } from "../../AttendanceEschoolpage/GenerateQR_Code/imageformat";

const initialState = {
  imageformat,
  selectedCompany: "",
  isfalse: false,
};

export const SubletSlice = createSlice({
  name: "companyIcon",
  initialState,
  reducers: {
    setSelectedCompany: (state, action) => {
      state.selectedCompany = action.payload;
      state.isfalse = false; // Ensure isfalse is set to false when a company is selected
    },
    toggleIconsVisibility: (state) => {
      state.isfalse = !state.isfalse;
    },
  },
});

export const { setSelectedCompany, toggleIconsVisibility } =
  SubletSlice.actions;
export default SubletSlice.reducer;
