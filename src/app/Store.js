import { configureStore } from "@reduxjs/toolkit";
import userDetail  from "../features/userDetailsclice";

export const store=  configureStore({
    reducer: {
        app:userDetail,
    },
})