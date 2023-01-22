import { configureStore } from "@reduxjs/toolkit";
import { categoriasSlice } from "./reducers/categoria";

const store = configureStore({
    reducer: {
        categorias: categoriasSlice
    }
});

export default store;