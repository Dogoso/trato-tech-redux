import { configureStore } from "@reduxjs/toolkit";
import { categoriasSlice } from "./reducers/categoria";
import { itensReducer } from "./reducers/itens";

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensReducer,
    }
});

export default store;