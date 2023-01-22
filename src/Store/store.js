import { configureStore } from "@reduxjs/toolkit";
import { categoriasSlice } from "./reducers/categoria";
import { itensSlice } from "./reducers/itens";

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
    }
});

export default store;