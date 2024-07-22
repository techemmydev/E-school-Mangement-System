import { configureStore } from "@reduxjs/toolkit";
import SubletSliceCompany from "./slice/SubletSlice";

export const store = configureStore({
  reducer: {
    companyIcon: SubletSliceCompany,
  },
});
