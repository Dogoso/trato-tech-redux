import { configureStore } from "@reduxjs/toolkit";
import { carrinhoReducer } from "./reducers/carrinho";
import { categoriasSlice } from "./reducers/categoria";
import { itensReducer } from "./reducers/itens";

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensReducer,
        carrinho: carrinhoReducer,
    }
});

export default store;