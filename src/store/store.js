import { configureStore } from "@reduxjs/toolkit";
import SneakersSlice from "./SneakersSlice";


export const store = configureStore({
    reducer: {
        sneakers: SneakersSlice
    }
})