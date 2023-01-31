import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const buscaSlice = createSlice({
    name: "busca",
    initialState,
    reducers: {
      buscar: (state, { payload }) => payload,
      resetarBusca: () => initialState
    }
});

export const { buscar, resetarBusca } = buscaSlice.actions;
export const buscaReducer = buscaSlice.reducer;